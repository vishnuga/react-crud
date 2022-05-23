import mongoose from 'mongoose'

const User= mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
})

export default mongoose.model('Users', User)