const { Schema } = require('mongoose')

const Client = new Schema(
    {
        name: {type:String, required:true},
        location: {type:Schema.Types.ObjectId, ref:'Location'},
        expertise: {type:Schema.Types.ObjectId, ref:'Expertise'},
        description: {type:String, required:true}
    },
    {timestamps:true}
)

module.exports = Client