const mongoose = require('mongoose')

var people = mongoose.model('employees',
{
    firstname : {type:String},
    lastname : {type:String},
    email : {type:String},
},'employees')

module.exports = {people}