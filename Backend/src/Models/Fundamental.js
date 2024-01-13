const mongoose = require('mongoose');

const fundamentalSchema = new mongoose.Schema({
    company:{
        type:String
    },
    industry:{
        type:String
    },
    symbol:{
        type:String
    },
    category:{
        type:String
    },
    market_cap:{
        type:Number
    },
    current_value:{
        type: Number
    },
    high_52week:{
        type:Number
    },
    low_52week:{
        type:Number
    },
    book_value:{
        type:Number
    },
    price_earnings:{
        type:Number
    },
    dividend_yield:{
        type:Number
    },
    roce:{
        type:Number
    },
    roe:{
        type:Number
    },
    sales_growth_3yr:{
        type:Number
    }
})

const fundamental= new mongoose.model('Fundamental',fundamentalSchema);
module.exports=fundamental