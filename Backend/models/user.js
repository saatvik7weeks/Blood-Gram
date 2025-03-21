const mongoose = require ('mongoose')
mongoose.connect ('mongodb+srv://rishabpanda779:Skpsmp123@cluster0.pxaef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const userSchema = mongoose.Schema ({
    username :String,
    email:String,
    password :String,
    age: Number,
    Bloodgroup :String,
    gender : String,
    address : String,
    contact : String
})

module.exports = mongoose.model ('User', userSchema)