'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _FakeDatabase = require('../../FakeDatabase');

var _Post = require('../types/Post');

exports.default = {
    posts: {
        type: new _graphql.GraphQLList(_Post.Post),
        description: "Get a list of recent posts",
        args: {},
        resolve: function resolve() {
            return _FakeDatabase.fakeDatabase.getBlogPosts();
        }
    }
}; /*
       When dealing with queries the query must match the form of the response
   
       A type must be defined and a good description is important, descriptions are viewable when used in combination with Graphical so having a good solid explanation is very helpful for both debugging and new users
   
       Args are optional
   
       Need resolve function
   */