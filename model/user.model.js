var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var mongooseHidden  = require('mongoose-hidden')();
//SchemaString#minlength(value, {message})
var minlength = [3, "The value of path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({minlength})"];
var userSchema = new Schema({
    username: {
        type: String,
        minlength: minlength,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        hide: true
    }
});
userSchema.plugin(mongooseHidden);
// compiling our schema into a Model.
module.exports = mongoose.model("User", userSchema, 'user');
