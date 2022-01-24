const mongoose = require("mongoose")
const Schema = mongoose.Schema
// const bcrypt = require('bcrypt-nodejs')

const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false }
})
userSchema.statics.isThisEmailInUse = async function (email) {
    if (!email) throw new Error('Invalid Email');
    try {
        const user = await this.findOne({ email });
        if (user) return false;

        return true;
    } catch (error) {
        console.log('error inside isThisEmailInUse method', error.message);
        return false;
    }
};
// userSchema.methods.encryptPassword = function (password) {
//     return bcrypt.hashSync(password, bcrypt.getSaltSync(5), null)

// }
// userSchema.methods.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// }
module.exports = mongoose.model("User", userSchema)