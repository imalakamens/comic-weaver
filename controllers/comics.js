const Comic = require('../models/comic');
const Writer = require('../models/writer');
const Artist = require('../models/artist');

module.exports = {
    index,
    new: newComic,
    create,
    show,
    delete: deleteComic,
    edit,
    update
};

function index(req, res) {
    Comic.find( {}, (err, comics) => {
        res.render('comics/index', {title: 'Collection', comics});
    }).sort({});
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
        res.render('comics/show', { comic, user: req.user } )
    });
};

function deleteComic(req,res) {
    Comic.findByIdAndDelete(req.params.id, err => {
        res.redirect('/comics');
    });  
};

function edit(req, res) {
    Comic.findById(req.params.id, (err, comic) => {
        Writer.find( {}, (err, writers) => {
            Artist.find( {}, (err, artists) =>{ 
                res.render('comics/edit', {comic, writers, artists })

            });
        });
    }); 
};

function update(req, res) {
    console.log(req.body);
    Comic.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedComic) => {
        res.redirect('/comics')
    })
}