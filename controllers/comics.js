const Comic = require('../models/comic')

module.exports = {
    index,
    new: newComic,
    create
};

function index(req, res) {
    Comic.find( {}, (err, comics) => {
        res.render('comics/index', {title: 'All Comics', comics});
    });
};

function newComic(req, res) {
    /* RESPOND by RENDERING a path from from VIEWs */
    res.render('comics/new', {title: 'Add a Comic'} );
};

function create(req, res) {
    const comic = new Comic(req.body);
    comic.user = req.user._id;
    console.log(comic)
    comic.save(err => {
        if(err) return res.redirect('comics/new', alert('Do it again'));
        res.redirect('/comics');
    });
};