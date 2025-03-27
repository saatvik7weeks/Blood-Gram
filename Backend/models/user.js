const mongoose = require ('mongoose')
mongoose.connect('mongodb+srv://rishabpanda779:Skpsmp123@cluster0.pxaef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Connection status checks
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

const userSchema = mongoose.Schema ({
    username :String,
    email:String,
    password :String,
    Bloodgroup :String
})

module.exports = mongoose.model ('User', userSchema)