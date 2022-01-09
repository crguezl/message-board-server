const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'localhost/messageboard';
//const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/messageboard'

const db = monk(connectionString);

module.exports = db;