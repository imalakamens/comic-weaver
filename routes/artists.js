var express = require('express');
var router = express.Router();
const artistsCtrl = require('../controllers/artists')

router.get('/artists/new', artistsCtrl.new);

router.post('/artists', artistsCtrl.create);

module.exports = router;
