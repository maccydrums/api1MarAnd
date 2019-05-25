const mongoose = require('mongoose');
const Student = require('./students.js');

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/marcus"

const connectDb = () => {
    return mongoose.connect(uri);
}
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

module.exports = {
    connectDb,
    models: {
        Student
    }
}