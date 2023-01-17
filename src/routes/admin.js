const express = require('express');
const router = express.Router();
const {admin}=require('../controllers/admin');

const hola=require('../middlewares/admin');

/* GET home page. */
router.get('/',hola,admin);

module.exports = router;
