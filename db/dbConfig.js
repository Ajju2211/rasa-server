const admin = require('firebase-admin');

const serviceAccount = require('../db/serviceAccount.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://rasa-chatbot.firebaseio.com'
});

const db = admin.firestore();

module.exports = db;
