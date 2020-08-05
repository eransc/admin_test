var mongoose = require('mongoose');
const { Model, Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    first_name: String,
    last_name: String,
    password: String
});

class User extends Model {}
module.exports = mongoose.model(User, userSchema, "users");