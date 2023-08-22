import express from 'express';
const app = express();
import apiRouter from './api';


app.use('/api', apiRouter);


app.get('/', (req, res) => {
    res.send('Hello world!');
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});


// TODO:
//  1. EC2 user data script does not start pm2 server
//  2. Exception handler for MongoDB connection. Try reconnecting few times, then exit or log an error
