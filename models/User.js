const mongoose = require('mongoose');

//const Schema = mongoose.Schema; // Normal Code
const {Schema} = mongoose;  // equvalent code of above in ES6

const userSchema = new Schema ({
    googleId: String
});

mongoose.model('user', userSchema);