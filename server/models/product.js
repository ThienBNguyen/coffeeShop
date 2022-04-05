const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
	imagePath: { type: String, required: true },
	title: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	drink: { type: Boolean, default: true },
	food: { type: Boolean, default: false },
	countInStock: {
		type: Number,
		required: true
	}
});

productSchema.statics.hasProductBeenInTheMenu = async function(title) {
	if (!title) throw new Error('produce has been in the menu');
	try {
		const product = await this.findOne({ title });
		if (product) return false;
		return true;
	} catch (error) {
		console.log('error inside hasProdcutInTheMenu', error.message);
		return false;
	}
};
module.exports = mongoose.model('Product', productSchema);
