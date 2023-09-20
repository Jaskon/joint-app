import express from 'express';
const app = express();
import apiRouter from './routers/api';
import * as path from 'path';


app.use(express.static(path.join(__dirname + '/../../frontend/build')));
app.use('/api', apiRouter);

// Any other route should be handled by frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../../frontend/build/index.html'));
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});
