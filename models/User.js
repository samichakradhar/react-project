let mongoose = require('mongoose')

let userSchema = mongoose.Schema(
    {
        name:{
            type: String
        },
        address:{
            type: String
        },
        class:{
            type: String
        }

    }
)
module.exports= mongoose.model('User',userSchema);