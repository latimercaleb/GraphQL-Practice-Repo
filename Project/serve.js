/*
      First we install the dependancies and then use express + graphql to set up graphiql
*/
import express from 'express';
import graphqlHTTP  from 'express-graphql';
import {schema} from './schema';

const app = express();
app.use('/graphql',graphqlHTTP({
      schema:schema,
      graphiql: true
}))
console.log("Running on port 4k...")
app.listen(4000);
