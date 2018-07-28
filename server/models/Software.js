const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SoftwareSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    paradigm: {
        type: String,
        required: true
    },
    discipline: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    username: {
        type: String
    }
})

module.exports = mongoose.model('Software', SoftwareSchema)