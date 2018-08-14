/*
  Details about a specific blog post
*/

import {GraphQLInt, GraphQLNonNull} from 'graphql';
import {fakeDatabase} from '../../FakeDatabase';
import {Post} from '../types/Post';
export default {
  post: {
    type: Post,
    description: "Gets details of a specific post",
    args: {
      id: {type: new GraphQLNonNull(GraphQLInt)}
    },
    resolve: function(parent,{id}){
      return fakeDatabase.BlogPost(id);
    }
  }
}
