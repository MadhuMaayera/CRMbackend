const authController = require("../controllers/auth.controller");
const authValidators = require("../middlewares/auth.validator");

module.exports = function(app){
    app.post("/crmapp/api/v1/auth/signup", authController.signup);
    app.post("/crmapp/api/v1/auth/signin",authController.signin);
}