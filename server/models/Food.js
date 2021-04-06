const mongoose = require('mongoose')

const FoodSchema=new mongoose.Schema({
    User:{
        type: String,
        required: true
    },
    Itemname:{
        type: String,
        required: true
    },
    Unit:{
        type: String,
        required: false
    },
    Calories:{
        type: Number,
        required: false
    },
    Carbs:{
        type: Number,
        required: false
    },
    Fats:{
        type: Number,
        required: false
    },
    Proteins:{
        type: Number,
        required: false
    },
    Salt:{
        type: Number,
        required: false
    },
    Sugar:{
        type: Number,
        required: false
    }
})

const Food=mongoose.model("FoodInformation", FoodSchema);

module.exports=Food;