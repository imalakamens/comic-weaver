var express = require('express');
var router = express.Router();
const comicsCtrl = require('../controllers/comics')

/* GET /comics */
router.get('/', comicsCtrl.index);
/* GET /comics/new */
router.get('/new', comicsCtrl.new);
/* POST  /comics - this will actually be a POST*/
router.post('/', comicsCtrl.create);
/* GET /comics/:id */
router.get('/:id', comicsCtrl.show);

module.exports = router;
