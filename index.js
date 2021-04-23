const mongoose = require('mongoose')

const connectDb = () => {
    mongoose
        .connect('http://127.0.0.1:27017/mindmap', { seNewUrlParser: true })
        .catch(e => console.error('error: ' + error))
}

const db = mongoose.connection

module.exports = {
    db,
    connectDb
}