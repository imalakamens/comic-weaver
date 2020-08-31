const Comic = require('../models/comic')

module.exports = {
    index
};

function index(req, res) {
    Comic.find( {}, (err, comics) => {
        res.render('comics/index', {title: 'All Comics', comics});
    })
};