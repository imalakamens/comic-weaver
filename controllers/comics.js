const Comic = require('../models/comic');
const Writer = require('../models/writer');
const Artist = require('../models/artist')

module.exports = {
    index,
    new: newComic,
    create,
    show
};

function index(req, res) {
    Comic.find( {}, (err, comics) => {
        res.render('comics/index', {title: 'All Comics', comics});
    });
};

// res.render('comics/new', {title: 'Add a Comic'} );
function newComic(req, res) {
    /* RESPOND by RENDERING a path from from VIEWs */
    Writer.find( {}, (err, writers) => {
        Artist.find( {}, (err, artists) =>{
            res.render('comics/new', {title: 'Add a Comic!', writers, artists} )
        });
    });
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

function show(req, res) {
    Comic.findById(req.params.id, (err, comic) =>{
        res.render('comics/show', { comic } )
    });
};