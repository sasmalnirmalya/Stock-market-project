const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http');
const socketIo = require('socket.io');

const stock_fundamentalRouter=require('./Routers/stock-fundamental')
const user_router=require('./Routers/users')
const indices_router= require('./Routers/indices')
const streamIndexData = require ('./Controllers/Indices/streamIndexData')


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
const port = process.env.PORT || 3000



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

