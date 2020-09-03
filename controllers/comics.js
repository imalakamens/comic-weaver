const Comic = require('../models/comic');
const Writer = require('../models/writer');
const Artist = require('../models/artist');
const cookieParser = require('cookie-parser');

module.exports = {
    index,
    new: newComic,
    create,
    show,
    weave
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
        if(err) {
    console.log(err);           
            return res.redirect('comics/new')
        };
        res.redirect('/comics');
    });
};

function show(req, res) {
    Comic.findById(req.params.id)
    .populate('writers artists').exec((err,comic) => {
        console.log(comic);
        res.render('comics/show', { comic } )
    });
};

function weave(req, res) {
    Comic.findById(req.params.id, (err, comic) => {
        if(comic.usersWeaving.id(req.user._id)) return res.redirect('/comics');
        comic.usersWeaving.push(req.user._id);
        comic.save( err => {
            res.redirect(`comics/${comic._id}`)
        });
    });
}