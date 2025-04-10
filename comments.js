// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

// Create a new Express application
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

// Connect to the database
async function connectToDatabase() {
    await client.connect();
    console.log('Connected to MongoDB');
}

// Route to get all comments
app.get('/comments', async (req, res) => {
    const db = client.db('commentsDB');
    const comments = await db.collection('comments').find().toArray();
    res.json(comments);
});
