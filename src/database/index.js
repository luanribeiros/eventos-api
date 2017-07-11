const firebase = require('firebase');
const config = require('config');

module.exports = ( callback ) => {
  console.info('Init Database module');
  
  firebase.initializeApp(config.firebase);
  const database = firebase.database();

	callback(database);
}