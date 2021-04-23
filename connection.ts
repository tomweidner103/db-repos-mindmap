import mongoose from 'mongoose'

mongoose
    .connect('http://127.0.0.1:27017/mindmap')
    .catch(e => console.error('error: ' + e))
export const db = mongoose.connection