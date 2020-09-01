var express = require('express');
var router = express.Router();
const comicsCtrl = require('../controllers/comics')

/* GET /comics */
router.get('/', comicsCtrl.index);
/* GET /comics/new */
router.get('/new', comicsCtrl.new)
module.exports = router;
