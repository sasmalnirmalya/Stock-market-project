const express = require('express')
const stock_fundamentalRouter=require('./Routers/stock-fundamental')
const user_router=require('./Routers/users')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
const port = process.env.PORT || 3000

app.use(cors({
    origin:"*"
}))

app.use(stock_fundamentalRouter)
app.use(user_router)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

app.get('/home',(req,res)=>{
    console.log('getting')
    res.send('running')
})
