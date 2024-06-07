const mongoose = require('mongoose');

const crudSchema = mongoose.Schema({
    task : {
        type : String,
        required : [true, "Please enter the data"]
    }
},{
    timestamps : true
})
module.exports = mongoose.model("Crud", crudSchema);