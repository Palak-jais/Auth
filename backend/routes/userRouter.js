const route=require('express').Router()
const {loginUser,registerUser} =require('../controllers/userController')

route.post('/register',registerUser);
route.post('/login',loginUser);

module.exports=route;