const express=require('express');
const {getUser,postUser,deleteNumber, updateNumber}=require('../controller/user');
const router=express.Router();

router.get('/form',getUser);
router.post('/form',postUser);
router.get('/form/:id',deleteNumber)
router.post('/form/:id/update',updateNumber);

module.exports=router;