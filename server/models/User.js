const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    favourites: {
        type: [Schema.Types.ObjectId],
        ref: 'Software'
    }
})
// runs before user is saved to db
UserSchema.pre('save', function (next) {
    // if the password field on schema is not modified return 'next' (call the next function)
    if (!this.isModified('password')) {
        return next()
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err)
            this.password = hash
            next()
        })
    })
})

module.exports = mongoose.model('User', UserSchema)


