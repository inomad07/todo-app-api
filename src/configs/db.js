require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');

const env = process.env.ENV;
const dbUri = process.env.MONGO_DB;
const mongoUser = process.env.MONGO_USER;
const mongoPwd = process.env.MONGO_PWD;

const pwd = mongoPwd.replace(/@/g, '\\@');
const host = process.env.HOST;
const port = process.env.MONGO_PORT;

const userUri = `${mongoUser}:${pwd}`;
const hostUri = `${host}:${port}`;
const mongoAuth = process.env.MONGO_AUTH;
const userRole = process.env.MONGO_ROLE;
const options = `${mongoAuth}=${userRole}`;

let mongoConnectionUri;

const mongooseConfig = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
};

if (env === 'development') {
	mongoConnectionUri = `mongodb://${hostUri}/${dbUri}`;
	console.log('This project is running in development mode');
} else {
	mongoConnectionUri = `mongodb://${userUri}@${hostUri}/${dbUri}?${options}`;
	console.log('This project is running in production mode');
}

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(mongoConnectionUri, mongooseConfig);
		console.log(`MongoDB started at ${conn.connection.host}:${port}`);
	} catch (err) {
		console.log(`MongoDB connection error ${err}`);
	}
};

mongoose.set('useFindAndModify', false);
mongoose.set('debug', true);

module.exports = connectDB;
