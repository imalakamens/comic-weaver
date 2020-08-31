var express = require('express');
var router = express.Router();
const comicsCtrl = require('../controllers/comics')

/* GET /comics */
router.get('/', comicsCtrl.index);

module.exports = router;
