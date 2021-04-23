import mongoose from 'mongoose'

declare module 'mindmap' {
    const db = mongoose.connect('http://127.0.0.1:27017/mindmap').catch(e => console.error('error: ' + e))
}