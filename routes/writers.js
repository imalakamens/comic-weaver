var express = require('express');
var router = express.Router();
const writersCtrl = require('../controllers/writers')

router.get('/writers/new', writersCtrl.new);

router.post('/writers', writersCtrl.create);

module.exports = router;
