const User = require("../models/user");

const HttpError = require("../models/http-error");

// const csrf = require("csurf")
// const csrfProtection = csrf();

const getUser = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
// create form in the front
const createUser = async (req, res) => {
    const user = await new User(req.body);
    //check if email is already in use
    const isNewUser = await User.isThisEmailInUse(user.email);
    try {
        if (!isNewUser) {
            return res.json({ success: false, message: "email has been use" })
        }
        await user.save();
        return res.status(201).json(user)


    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
const updateUser = async (req, res, body) => {
    //get the body from the request req.body
    const user = await new User(req.body);
    try {
        if (!user.email) {
            await User.findOneAndUpdate({ _id: req.params.id }, req.body)
            const findUser = await User.findOne({ _id: req.params.id })
            return res.status(201).json(findUser);
        } else {
            return res.json({ success: false, message: "can not change email" })
        }

    } catch (error) {
        res.status(404).json({ message: "userId is incorrect" })
    }
}
const deleteUser = async (req, res, body) => {
    try {
        await User.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json({ message: "delete success" });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
exports.getUser = getUser
exports.createUser = createUser
exports.updateUser = updateUser
exports.deleteUser = deleteUser