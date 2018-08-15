"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentInputType = exports.Comment = undefined;

var _graphql = require("graphql");

var Comment = exports.Comment = new _graphql.GraphQLObjectType({
  name: "Comment",
  description: "All details of a comment",
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLInt },
      //postId: {/*...*/},
      name: { type: _graphql.GraphQLString },
      content: { type: _graphql.GraphQLString }
    };
  }
});

// Input object
/*
  In this one we have a relation in our db with postId being a unique key to another part of the db that we define as....

*/
var CommentInputType = exports.CommentInputType = new _graphql.GraphQLInputObjectType({
  name: "CommentInput",
  fields: {
    name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    postId: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) }
  }
});