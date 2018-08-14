'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _FakeDatabase = require('../../FakeDatabase');

var _Post = require('../types/Post');

exports.default = {
  addPost: {
    type: _Post.Post,
    description: "Creates a new blog post",
    args: {
      post: { type: _Post.PostInputType }
    },
    resolve: function resolve(parent, _ref) {
      var post = _ref.post;

      return _FakeDatabase.fakeDatabase.addNewBlogPost(post);
    }
  }
}; /*
     First mutation, will write a new post to the DB and returns the new post, the arguments must contain the data for the new post this can be done by passing in each value seperately or by leveraging the new inputobject type
   
     Mutations by convention should return the post that is written to the db so that it can be worked with or utilized
   */