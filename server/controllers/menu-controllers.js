// Controllers for menu
const Product = require("../models/product");
// Import HttpError model
const HttpError = require('../models/http-error');

// Get All Menu
const getAllMenu = async (req, res, next) => {
    try {
        const menu = await Product.find()
        return res.status(200).json(menu);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

// Get All Drink
const getAllDrinks = async (req, res, next) => {
    try {
        const drinkMenu = await Product.find({ drink: { $eq: true } }
        )
        return res.status(200).json(drinkMenu)
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
};

// Get All Food 
const getAllFood = async (req, res, next) => {
    try {
        const foodMenu = await Product.find({ food: { $eq: true } }
        )
        return res.status(200).json(foodMenu)
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
};

// Add a new Item
const addNewItem = async (req, res, next) => {
    const product = await new Product(req.body)
    const newProduct = await Product.hasProductBeenInTheMenu(product.title)
    try {
        if (!newProduct) {
            return res.json({ sucess: false, message: "product has been in the menu" })
        }
        await product.save();
        return res.status(201).json(product)
    } catch (error) {
        return res.status(409).json({ message: error.message })
    }
};

// Get item by Id
const getItemById = async (req, res, next) => {
    const itemId = req.params.id;
    try {
        const product = await Product.findById({ _id: itemId })
        res.status(201).json(product)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
const deleteItemById = async (req, res) => {
    const itemId = req.params.id;
    try {
        await Product.findByIdAndDelete({ _id: itemId })
        res.status(200).json({ message: "delete success" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
const updateItemById = async (req, res) => {
    try {
        await Product.findByIdAndUpdate({ _id: req.params.id }, req.body)
        const findUpdateProduct = await Product.findOne({ _id: req.params.id })
        return res.status(201).json(findUpdateProduct);
    } catch (error) {
        res.status(404).json({ message: "unauthorize user" })

    }
}
exports.getAllMenu = getAllMenu;
exports.getAllDrinks = getAllDrinks;
exports.getAllFood = getAllFood;
exports.addNewItem = addNewItem;
exports.getItemById = getItemById;
exports.deleteItemById = deleteItemById;
exports.updateItemById = updateItemById;