'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _FakeDatabase = require('../../FakeDatabase');

var _Author = require('../types/Author');

exports.default = {
  author: {
    type: _Author.Author,
    description: "Gets a specific author",
    args: {
      id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    },
    resolve: function resolve(parent, args) {
      return _FakeDatabase.fakeDatabase.getAuthor(args.id);
    }
    /*
      // ES6 destructuring
      resolve: function(parent,{id}){
        return fakeDatabase.getAuthor(id);
      }
    */
  }
}; /*
       Args is required here because I want to know WHICH author specifically which is why we use non-null to wrap it, it won't work if it's not there
   */