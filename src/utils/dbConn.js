import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URL;

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (!client.isConnected()) {
    await client.connect();
  }

  cachedClient = client;

  return client;
}
