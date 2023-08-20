import appConfig from "../app-config";
import { MongoClient, ServerApiVersion } from 'mongodb';

export const uri = `mongodb+srv://${appConfig.mongoUser}:${appConfig.mongoPassword}@${appConfig.mongoUrl}/?retryWrites=true&w=majority`;

export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

export async function getCollections() {
    const database = client.db(appConfig.mongoDatabase);
    return await database.listCollections().toArray();
}

export async function getCollection(collectionName: string) {
    const database = client.db(appConfig.mongoDatabase);
    return await database.collection(collectionName).find().toArray();
}

export async function closeConnection() {
    await client.close();
}
