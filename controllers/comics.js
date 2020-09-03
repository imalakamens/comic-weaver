const Comic = require('../models/comic');
const Writer = require('../models/writer');
const Artist = require('../models/artist');

module.exports = {
    index,
    new: newComic,
    create,
    show,
    weave,
    delete: deleteComic,
    edit
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
    comic.addedBy = req.user._id;
    comic.save(err => {
        if(err) {       
            return res.redirect('comics/new')
        };
        res.redirect('/comics');
    });
};

function show(req, res) {
    Comic.findById(req.params.id)
    .populate('writers artists addedBy').exec((err,comic) => {
        res.render('comics/show', { comic } )
    });
};

function weave(req, res) {
    Comic.findById(req.params.id, (err, comic) => { 
        // req.params.id is the object of the book being viewed
        comic.user = req.user._id;
        comic.addedBy.push(comic.user);
        comic.save(err => {
            if(err) {
                return res.redirect(`comics/${comic._id}`)
            };
            res.redirect('/comics')
        });
    });
}

function deleteComic(req,res) {
    Comic.findByIdAndDelete(req.params.id, err => {
        res.redirect('/comics');
    });  
};

function edit(req, res) {
    Comic.findById(req.params.id, (err, comic) => {
        res.render('comics/edit', comic)
    }); 
};