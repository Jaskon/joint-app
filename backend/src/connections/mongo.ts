import appConfig from "../app-config";
import { MongoClient, ServerApiVersion } from 'mongodb';

export const uri = `mongodb+srv://${appConfig.mongoUser}:${appConfig.mongoPassword}@${appConfig.mongoUrl}/?retryWrites=true&w=majority`;

export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

connectToMongo(5, 5000, 300000);

export async function connectToMongo(retryCount: number, retryDelay: number, longRetryDelay: number) {
    const totalRetryCount = retryCount;

    async function recurse(retryCount: number) {
        try {
            await client.connect();
        } catch (error) {
            if (retryCount > 0) {
                console.log(`Failed to connect to mongodb. Retrying in ${retryDelay / 1000} seconds. ${retryCount} retries left.`);
                setTimeout(() => {
                    recurse(retryCount - 1);
                }, retryDelay);
            } else {
                console.log(`Failed to connect to mongodb ${-retryCount + totalRetryCount} times. Retry count is out. Retrying endlessly with long delay ${longRetryDelay / 1000 / 60} minutes.`);
                setTimeout(() => {
                    recurse(retryCount - 1);
                }, longRetryDelay);
            }
        }
    }

    return await recurse(retryCount);
}

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
