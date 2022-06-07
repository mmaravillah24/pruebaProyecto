const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    const userSchema = new Schema({
        nameUser: String,
       
      //  pregunta: String, 
        email : {   
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        age : {
            type: Number,
            required: true
        },
        userType: {
            type: String,
            required: true,
            enum: ['admin', 'entrepreneur'],
            default: 'entrepreneur'
        },
    }, {    timestamps: true,
        });
    module.exports = mongoose.model('Usuario', userSchema);