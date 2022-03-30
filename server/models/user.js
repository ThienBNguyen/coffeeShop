const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt-nodejs')

const userSchema = new Schema({
	name: { type: String, required: true, trim: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true, unique: true },
	admin: { type: Boolean, default: false },
	date: {
		type: Date,
		default: Date.now
	}
});
userSchema.statics.isThisEmailInUse = async function(email) {
	if (!email) throw new Error('Invalid Email');
	console.log(email);
	try {
		const user = await this.findOne({ email });
		if (user) return false;

		return true;
	} catch (error) {
		console.log('error inside isThisEmailInUse method', error.message);
		return false;
	}
};
userSchema.statics.isThisUserMatch = async function(user) {
	if (!user.email) throw new Error('Invalid Email');
	// console.log(user)
	try {
		const email = user.email;
		const userVerification = await this.findOne({ email });
		console.log(userVerification);
		if (userVerification.password == user.password) {
			return userVerification;
		}

		return false;
	} catch (error) {
		console.log('error inside isThisUserMatch method', error.message);
		return false;
	}
};
// userSchema.methods.encryptPassword = function (password) {
//     return bcrypt.hashSync(password, bcrypt.getSaltSync(5), null)

// }
// userSchema.methods.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// }
module.exports = mongoose.model('User', userSchema);
