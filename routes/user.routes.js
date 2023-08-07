const UserController = require("../controllers/user.controller");
const authValidators = require("../middlewares/auth.validator");

module.exports = function(app){
    app.get("/crmapp/api/v1/users/", authValidators.isUserAuthenticated, authValidators.isAdmin, UserController.getAllUsers);
    app.get("/crmapp/api/v1/user/:userId", authValidators.isUserAuthenticated, authValidators.isAdmin, UserController.getUserByUserId);
    app.get("/crmapp/api/v1/users/:email", authValidators.isUserAuthenticated, authValidators.isAdmin, UserController.getUserByEmail);
    
}