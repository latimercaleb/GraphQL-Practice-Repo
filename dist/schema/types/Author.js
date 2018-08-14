'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Author = undefined;

var _graphql = require('graphql');

var _Post = require('./Post');

var _FakeDatabase = require('../../FakeDatabase');

var Author = exports.Author = new _graphql.GraphQLObjectType({
  name: "Author",
  description: "All details of an author",
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLString },
      name: { type: _graphql.GraphQLString },
      email: { type: _graphql.GraphQLString },
      posts: {
        type: new _graphql.GraphQLList(_Post.Post),
        resolve: function resolve(author) {
          return _FakeDatabase.fakeDatabase.getPostsOfAuthor(author.id);
        }
      }
    };
  }
}); /*
      First GraphQl type: purpose is to define to graphql what type of data to expect from fakedatabase and what to return to the user
      We utilize module exports and imports and each new Graphql object type takes 3 things name, description and fields, which should match the fields (or columns)  in our database
    
      It'd be useful to be able to query for all posts by an author so we enable that as the last field
    
      All types are for is telling graphql how to cope with relationships in data and what to expose to the front end
    
      To actually go about fetching posts we must wrap these types in queries in the queries folder
    */