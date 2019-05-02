import express from 'express';
// Body parser parses incoming request bodies in a middleware before handlers. 
// It parses the response data coming from the client in an object called req.body
import bodyParser from 'body-parser';
import router from './routes/index.js';

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);  // makes use of router middleware


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});