const mongoose = require('mongoose');
require('dotenv').config();


exports.connect = async() => {
	await mongoose
		.connect(process.env.MONGO_URL)
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};