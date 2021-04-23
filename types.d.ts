import mongoose from 'mongoose';

mongoose
    .connect('http://127.0.0.1:27017/mindmap', { setNewUrlParser: true })
    .catch(e => console.error('error: ' + error))
const db = mongoose.connection
    
module.exports = { db }