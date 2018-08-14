/*
    Args is required here because I want to know WHICH author specifically which is why we use non-null to wrap it, it won't work if it's not there
*/
import {GraphQLString, GraphQLNonNull} from 'graphql';
import {fakeDatabase} from '../../FakeDatabase';
import {Author} from '../types/Author';
export default {
  author: {
    type: Author
    description: "Gets a specific author",
    args: {
      id: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve: function(parent,args){
      return fakeDatabase.getAuthor(args.id);
    }
    /*
      // ES6 destructuring
      resolve: function(parent,{id}){
        return fakeDatabase.getAuthor(id);
      }
    */
  }
}
