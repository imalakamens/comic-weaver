const Writer = require('../models/writer');
const Comic = require('../models/comic');

module.exports = {
    new: newWriter,
    create
};

function newWriter(req, res) {
  Writer.find({}, function (err, writers) {
    res.render('writers/new', {
      title: 'Add Writer',
      writers
    });
  })
};

function create(req, res) {
  const writer = new Writer(req.body);
  writer.user = req.user._id;
  console.log(writer)
  writer.save(err => {
      if(err) return res.redirect('writers/new', alert('Do it again'));
      res.redirect('/writers/new');
  });
};