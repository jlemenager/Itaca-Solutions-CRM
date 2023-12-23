const { Schema } = require('mongoose')

const Project = new Schema(
    {
        name: {type:String, required:true},
        location:{type:Schema.Types.ObjectId, ref:'Location'},
        client: {type:Schema.Types.ObjectId, ref:'Client',required:false},
        client: {type:Schema.Types.ObjectId, ref:'Client',required:false},
        client: {type:Schema.Types.ObjectId, ref:'Client',required:false},
        client: {type:Schema.Types.ObjectId, ref:'Client',required:false},
        client: {type:Schema.Types.ObjectId, ref:'Client',required:false},
        client: {type:Schema.Types.ObjectId, ref:'Client',required:false},
        client: {type:Schema.Types.ObjectId, ref:'Client',required:false},
        client: {type:Schema.Types.ObjectId, ref:'Client',required:false},
        client: {type:Schema.Types.ObjectId, ref:'Client',required:false},
        client: {type:Schema.Types.ObjectId, ref:'Client',required:false},
        description: {type:String, required:true},
        clientNumber: {type:Boolean, required:true}
    },
    {timestamps:true}
)

module.exports = Project