const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user-controllers');
const auth = require('../middleware/auth');
router.get('/profile', auth, userControllers.getUser);
router.post('/login', userControllers.loginUser);
router.post('/create', userControllers.createUser);
router.put('/update/:id', userControllers.updateUser);
router.delete('/delete/:id', userControllers.deleteUser);

module.exports = router;
