const clientPromise = require('../lib/mongodb');

let SearchController = {};

SearchController.get = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db();
    const meetupsCollection = await db.collection('meetups').find().toArray();
    res.status(200).json({ meetups: meetupsCollection })
  } catch (error) {
    console.log(error)
  }
};

module.exports = SearchController;