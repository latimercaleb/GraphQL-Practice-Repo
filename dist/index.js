'use strict';

var _graphql = require('graphql');

var _schema = require('./schema/');

//Query 1: Get all titles, from all blogPosts
// Root for loading graphql, schema and execution context
var query1 = '{\n  posts{\n    title\n  }\n}';
// Query2: List of all blogposts and the name of the author who wrote them???
var query2 = '{\n      posts{\n            title,\n            author {\n                  id\n                  name\n                  email\n            }\n      }\n}';

//To run a query do the following, graphql works by async and returns a promise which needs to be handled (resolve/failure) pattern

// graphql(schema,query1).then(result => {
//   // console.log("Original form: ",result); // Result is in object form
//   let data = JSON.stringify(result,null,2);// stringify all fields and indent by 2 spaces
//   console.log("Pretty form: ", data);
// }).catch(error => {
//   console.log("Issue: ",error);
// })

//Running the second query:
(0, _graphql.graphql)(_schema.schema, query2).then(function (result) {
      var data = JSON.stringify(result, null, 2);
      console.log("Result: ", data);
}).catch(function (error) {
      console.log("Error detected:", error);
});