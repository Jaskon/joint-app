require('dotenv').config();

const AppConfig = {
    mongoUrl: process.env.MONGO_URL,
    mongoUser: process.env.MONGO_USER,
    mongoPassword: process.env.MONGO_PASSWORD,
};

module.exports = {
    AppConfig,
    mongoUrl: AppConfig.mongoUrl,
    mongoUser: AppConfig.mongoUser,
    mongoPassword: AppConfig.mongoPassword,
};
