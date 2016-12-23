console.log("Routes Loaded");

var userController = require('../controllers/userController.js');
module.exports = function(app){
    // access params with request.params.id
    // access form data with request.body

    app.get("/users", userController.index);
    app.get('/users/:id', userController.show);
    app.post("/users", userController.create);
    app.put('/users/:id', userController.update);
    app.delete('/users/:id', userController.delete);
}
