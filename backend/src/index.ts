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
