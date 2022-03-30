const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const HttpError = require('../models/http-error');
// const csrf = require("csurf")
// const csrfProtection = csrf();
const getUser = async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('password'); // find all use in the data base for admin
		return res.status(200).json(user);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
// create user
const createUser = async (req, res) => {
	const { name, email, password } = await req.body; // get json data

	if (!name || !email || !password) {
		return res.status(400).json({ msg: 'please enter all fields' });
	}
	//check if email is already in use

	try {
		const isNewUser = await User.isThisEmailInUse(email);
		if (!isNewUser) {
			return res.status(400).json({ success: false, msg: 'User already exists' });
		}
		const newUser = await new User({ name, email, password });
		await bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if (err) throw err;
				newUser.password = hash;
				newUser.save().then((user) => {
					jwt.sign({ id: user.id }, config.get('jwtSecret'), { expiresIn: 36000 }, (err, token) => {
						if (err) throw err;
						res.json({
							token,
							user: {
								id: user.id,
								name: user.name,
								email: user.email
							}
						});
					});
				});
			});
		});
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
const updateUser = async (req, res, body) => {
	//get the body from the request req.body
	const user = await new User(req.body);
	try {
		if (!user.email) {
			await User.findOneAndUpdate({ _id: req.params.id }, req.body);
			const findUser = await User.findOne({ _id: req.params.id });
			return res.status(201).json(findUser);
		} else {
			return res.json({ success: false, message: 'can not change email' });
		}
	} catch (error) {
		res.status(404).json({ message: 'userId is incorrect' });
	}
};
const deleteUser = async (req, res, body) => {
	try {
		await User.findByIdAndDelete({ _id: req.params.id });
		res.status(200).json({ message: 'delete success' });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
const loginUser = async (req, res) => {
	const { email, password } = await req.body;
	if (!email || !password) {
		return res.status(400).json({ msg: 'please enter all fields' });
	}
	//check for existing user
	User.findOne({ email }).then((user) => {
		if (!user) {
			return res.status(400).json({ msg: 'User does not exists' });
		}
		//validate password
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

			jwt.sign({ id: user.id }, config.get('jwtSecret'), { expiresIn: 3600 }, (err, token) => {
				if (err) throw err;
				res.json({
					token,
					user: {
						id: user.id,
						name: user.name,
						email: user.email
					}
				});
			});
		});
	});
};
exports.getUser = getUser;
exports.loginUser = loginUser;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
