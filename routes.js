const express=require('express');
const EcommerceController = require('./controller/ecommerce.controller');
const EcommerceRouter = express.Router();
const userController = require('./controller/user.controller');
const userRouter = express.Router();
const spController = require('./controller/sp.controller');
const spRouter = express.Router();



EcommerceRouter.post('/', EcommerceController.create);
EcommerceRouter.get('/', EcommerceController.getAll);
EcommerceRouter.delete('/delete/:id', EcommerceController.deleteById);
EcommerceRouter.get('/:id', EcommerceController.getById);


spRouter.post('/', spController.createsp);
spRouter.get('/', spController.getAllSp);

userRouter.post('/', userController.create);
userRouter.get('/', userController.getAllUser);
userRouter.get('/:email', userController.getByEmailId);
userRouter.put('/:email', userController.updateByEmailId);




userRouter.get('/login/auth', userController.auth ,(req, res) => { res.status(200).send('welcome ' + req.username)});
userRouter.post('/login', userController.loginFunction);
const routes = (app) => {

  app.use('/product', EcommerceRouter);
  app.use('/user', userRouter);
  app.use('/sp', spRouter);

  app.get('/', (req, res) => {
    return res.send({ Message: "available"});
  }) 
}

module.exports=routes;