'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostInputType = exports.Post = undefined;

var _graphql = require('graphql');

var _Author = require('./Author');

var _Comment = require('./Comment');

var _fakeDatabase = require('../../fakeDatabase');

/*
  In this one we have a relation in our db with author being a unique key to another part of the db that we define as a relationship.

  Defining a relationship is just importing the type, and then understanding that to resolve that type a db call will need to be made so we use an async resolve function which passes itself as a param.

  This calls a function to return the db details by means of a read method which is defined in the db file

  A more complex relationship exists between blogpost and comments, since a single post can have one or more comments. Graphql must tell it to resolve in a list


  An input object type requires a name a description and the fields to edit in the mutation, in the constructor we use Non-null again because we can't add empty fields in the db
*/
var Post = exports.Post = new _graphql.GraphQLObjectType({
  name: "Post",
  description: "All details of a comment",
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLInt },
      title: { type: _graphql.GraphQLString },
      content: { type: _graphql.GraphQLString },
      author: {
        type: _Author.Author,
        resolve: function resolve(post) {
          return _fakeDatabase.fakeDatabase.getAuthor(post.author);
        }
      },
      comments: {
        type: new _graphql.GraphQLList(_Comment.Comment),
        resolve: function resolve(post) {
          return _fakeDatabase.fakeDatabase.getCommentsForPost(post.id);
        }
      }
    };
  }
});

// Input object
var PostInputType = exports.PostInputType = new _graphql.GraphQLInputObjectType({
  name: "PostInput",
  fields: {
    title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    author: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
  }
});