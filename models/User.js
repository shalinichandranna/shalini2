const mongoose = require('mongoose');

// ✅ Define the UserSchema properly
const UserSchema = new mongoose.Schema({
    username: {type:String,required:true},
    email: {type:String,required:true},
    password:{type:String,required:true},
});

// ✅ Export the model with overwrite protection
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
