const Artist = require('../models/artist');
const Comic = require('../models/comic');

module.exports = {
    new: newArtist,
    create
};

function newArtist(req, res) {
  Artist.find({}, function (err, artists) {
    res.render('artists/new', {
      title: 'Add Artist',
      artists
    });
  })
};

function create(req, res) {
  const artist = new Artist(req.body);
  artist.user = req.user._id;
  console.log(artist)
  artist.save(err => {
      if(err) return res.redirect('artists/new', alert('Do it again'));
      res.redirect('/comics');
  });
};