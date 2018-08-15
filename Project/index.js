// Root for loading graphql, schema and execution context
import {graphql} from 'graphql';
import {schema} from './schema/';

//Query 1: Get all titles, from all blogPosts
const query1 = `{
  posts{
    title
  }
}`;
// Query2: List of all blogposts and the name of the author who wrote them???
const query2= `{

}`;

//To run a query do the following, graphql works by async and returns a promise which needs to be handled (resolve/failure) pattern
// graphql(schema,query1).then(result => {
//   // console.log("Original form: ",result); // Result is in object form
//   let data = JSON.stringify(result,null,2);// stringify all fields and indent by 2 spaces
//   console.log("Pretty form: ", data);
// }).catch(error => {
//   console.log("Issue: ",error);
// })

//Running the second query:
