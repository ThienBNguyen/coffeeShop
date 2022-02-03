var express = require("express")
var router = express.Router();
// var csrf = require('csurf')
// var passport = require(" passport")
var userControllers = require("../controllers/user-controllers")
// var csrfProtection = csrf();
// router.use(csrfProtection)

router.get("/profile", userControllers.getUser)
router.post("/profile/login", userControllers.loginUser)
router.post("/create", userControllers.createUser)
router.put("/update/:id", userControllers.updateUser)
router.delete("/delete/:id", userControllers.deleteUser)


module.exports = router;