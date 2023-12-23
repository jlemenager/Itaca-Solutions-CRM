const { Schema } = require('mongoose')

const Expertise = new Schema(
    {
        name: {type:String, required:true},
        description: {type:String, required:true}
    },
    {timestamps:true}
)

module.exports = Expertise