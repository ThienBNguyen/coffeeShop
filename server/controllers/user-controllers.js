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
    const isNewUser = await User.isThisEmailInUse(user.email);
    try {
        if (!isNewUser) {
            return res.json({ sucess: false, message: "email has been use" })
        }
        await user.save();
        return res.status(201).json(user)


    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
exports.getUser = getUser
exports.createUser = createUser