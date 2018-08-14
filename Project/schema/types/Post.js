/*
  In this one we have a relation in our db with author being a unique key to another part of the db that we define as a relationship.

  Defining a relationship is just importing the type, and then understanding that to resolve that type a db call will need to be made so we use an async resolve function which passes itself as a param.

  This calls a function to return the db details by means of a read method which is defined in the db file

  A more complex relationship exists between blogpost and comments, since a single post can have one or more comments. Graphql must tell it to resolve in a list

*/
import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} from 'graphql';
import {Author} from 'Author';
import {Comment} from "Comment";
import {fakeDatabase} from '../../fakeDatabase';
export const Post = new GraphQLObjectType({
  name: "Post",
  description: "All details of a comment",
  fields: () => ({
    id: {type: GraphQLInt},
    title: {type: GraphQLString},
    content: {type: GraphQLString},
    author: {
      type: Author,
      resolve: (post) => {
        return fakedatabase.getAuthor(post.author)
      }
    },
    comments: {
      type: new GraphQLList(Comment),
      resolve : (post) => {
        return getCommentsForPost(post.id)
      }
    }
  })
})
