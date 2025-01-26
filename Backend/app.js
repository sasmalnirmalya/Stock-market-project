require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http');
const socketIo = require('socket.io');
const logger = require("./logger");
const morgan = require("morgan");


const stock_fundamentalRouter=require('./src/Routers/stock-fundamental')
const user_router=require('./src/Routers/users')
const indices_router= require('./src/Routers/indices')
const streamIndexData = require ('./src/Controllers/Indices/streamIndexData')


const app = express()
app.use(cors({
    origin:"*"
}))
app.use(cors())
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: '*',
    }
  });
const port = process.env.PORT

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.use(stock_fundamentalRouter)
app.use(user_router)
app.use(indices_router)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

io.on('connection', streamIndexData.streamIndexData
);


server.listen(port, () => {
    console.log('Server is up on port ' + port)
})

