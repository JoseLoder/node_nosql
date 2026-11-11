import express from 'express';
import { MongoClient } from 'mongodb';


const uri = process.env.MONGODB_URI;
const client= new MongoClient(uri);

const app = express();
const port = process.env.PORT || 3000;

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToDatabase();


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
