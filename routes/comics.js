var express = require('express');
var router = express.Router();
const comicsCtrl = require('../controllers/comics')

/* GET /comics */
router.get('/', comicsCtrl.index);
/* GET /comics/new */
router.get('/new', comicsCtrl.new);
/* POST  /comics - this will actually be a POST*/
router.post('/', isLoggedIn, comicsCtrl.create);
/* POST /comics/:id */
router.delete('/comics/:id', isLoggedIn, comicsCtrl.delete);
router.get('/:id', comicsCtrl.show);
/* GET /comics/:id */
router.get('/:id/edit', isLoggedIn, comicsCtrl.edit);
router.put('/:id', isLoggedIn, comicsCtrl.update)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
