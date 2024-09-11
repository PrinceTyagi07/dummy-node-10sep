const usercontroller = require('../controllers/usercontrollers');
const express = require('express');
const router = express.Router();
router.use(express.json());
router.get('/allusers', usercontroller.allUsers);
router.get('/user/:id', usercontroller.particularUsers);
router.post('/adduser',usercontroller.adduser)

module.exports=router;