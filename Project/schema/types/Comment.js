/*
  In this one we have a relation in our db with postId being a unique key to another part of the db that we define as....

*/
import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql';
export const Comment = new GraphQLObjectType({
  name: "Comment",
  description: "All details of a comment",
  fields: () => ({
    id: {type: GraphQLInt},
    postId: {/*...*/},
    name: {type: GraphQLString},
    content: {type: GraphQLString},
  })
})
