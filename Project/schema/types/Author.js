/*
  First GraphQl type: purpose is to define to graphql what type of data to expect from fakedatabase and what to return to the user
  We utilize module exports and imports and each new Graphql object type takes 3 things name, description and fields, which should match the fields (or columns)  in our database

  It'd be useful to be able to query for all posts by an author so we enable that as the last field

  All types are for is telling graphql how to cope with relationships in data and what to expose to the front end

  To actually go about fetching posts we must wrap these types in queries in the queries folder
*/
import {GraphQLObjectType, GraphQLString,GraphQLList} from 'graphql';
import {Post} from 'Post';
import {fakeDatabase} from '../../FakeDatabase'
export const Author = new GraphQLObjectType({
  name: "Author",
  description: "All details of an author",
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    posts{
      type: new GraphQLList(Post),
      resolve: (author) => {
        return fakeDatabase.getPostsOfAuthor(author.id);
      }
    }
  })
})
