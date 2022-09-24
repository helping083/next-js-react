let SearchController = {};

SearchController.get = (req, res) => {
    res.status(200).send({search: 'search'})
};

module.exports = SearchController;