'use strict';

var _graphql = require('graphql');

var _schema = require('./schema/');

//Query 1: Get all titles, from all blogPosts
// Root for loading graphql, schema and execution context
var query1 = '{\n  posts{\n    title\n  }\n}';

//To run a query do the following, graphql works by async and returns a promise which needs to be handled (resolve/failure) pattern
(0, _graphql.graphql)(_schema.schema, query1).then(function (result) {
  console.log("Original form: ", result); // Result is in object form
  var data = JSON.stringify(result, null, 2); // stringify all fields and indent by 2 spaces
  console.log("Pretty form: ", data);
}).catch(function (error) {
  console.log("Issue: ", error);
});