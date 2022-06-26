const express = require('express');
require('dotenv').config();
const colors = require('colors');
const {graphqlHTTP} =require('express-graphql');
const schema = require('./schema/schema.js');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
//connect to datatbase
connectDB();

app.use(bodyParser.json()); // application/json
app.use('/graphql', graphqlHTTP({
    schema,
    qraphiql:process.env.NODE_ENV === 'development'
    
}));

app.listen(port, ()=> console.log(`Server running on ${port}`));