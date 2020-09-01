const Comic = require('../models/comic')

module.exports = {
    index,
    new: newComic
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