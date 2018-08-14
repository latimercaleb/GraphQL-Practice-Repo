/*
    When dealing with queries the query must match the form of the response

    A type must be defined and a good description is important, descriptions are viewable when used in combination with Graphical so having a good solid explanation is very helpful for both debugging and new users

    Args are optional

    Need resolve function
*/
import {GraphQLList} from 'graphql';
import {fakeDatabase} from '../../FakeDatabase';
import {Post} from '../types/Post';
export default {
  posts: {
    type: new GraphQLList(Post),
    description: "Get a list of recent posts",
    args: { },
    resolve: function(){
      return fakeDatabase.getBlogPosts();
    }
  }
}
