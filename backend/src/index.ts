import { MongoClient, ServerApiVersion } from 'mongodb';
import appConfig from './app-config';
// Create an express app
import express from 'express';
const app = express();
import apiRouter from './api';

const uri = `mongodb+srv://${appConfig.mongoUser}:${appConfig.mongoPassword}@${appConfig.mongoUrl}/?retryWrites=true&w=majority`;

// TODO: Dummy code to connect to Mongo
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });
//
// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);


app.use('/api', apiRouter);


app.get('/', (req, res) => {
    res.send('Hello world!');
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});
