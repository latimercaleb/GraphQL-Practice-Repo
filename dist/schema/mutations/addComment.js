'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _FakeDatabase = require('../../FakeDatabase');

var _Comment = require('../types/Comment');

exports.default = {
  addComment: {
    type: _Comment.Comment,
    description: "Creates a new comment",
    args: {
      comment: { type: _Comment.CommentInputType }
    },
    resolve: function resolve(parent, _ref) {
      var comment = _ref.comment;

      return _FakeDatabase.fakeDatabase.addNewComment(comment);
    }
  }
};