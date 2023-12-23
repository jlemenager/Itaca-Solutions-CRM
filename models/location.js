const { Schema } = require('mongoose')

const Location = new Schema(
    {
        name: {type:String, required:true}
    },
    {timestamps:true}
)

module.exports = Location