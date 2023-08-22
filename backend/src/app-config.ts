import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../.env' })

export default {
    mongoUrl: process.env.MONGO_URL,
    mongoUser: process.env.MONGO_USER,
    mongoPassword: process.env.MONGO_PASSWORD,
    mongoDatabase: process.env.MONGO_DATABASE,
};
