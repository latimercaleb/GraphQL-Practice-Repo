/*
  First mutation, will write a new post to the DB and returns the new post, the arguments must contain the data for the new post this can be done by passing in each value seperately or by leveraging the new inputobject type

  Mutations by convention should return the post that is written to the db so that it can be worked with or utilized
*/

import {GraphQLInt, GraphQLNonNull} from 'graphql';
import {fakeDatabase} from '../../FakeDatabase';
import {Post, PostInputType} from '../types/Post';
export default {
  addPost: {
    type: Post,
    description: "Creates a new blog post",
    args: {
      post: {type: PostInputType}
    },
    resolve: function(parent,{post}){
      return fakeDatabase.addNewBlogPost(post);
    }
  }
}
