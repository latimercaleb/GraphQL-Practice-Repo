/*
  In this one we have a relation in our db with postId being a unique key to another part of the db that we define as....

*/
import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLInputObjectType,GraphQLNonNull} from 'graphql';
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


// Input object
export const CommentInputType = new GraphQLInputObjectType({
  name: "CommentInput",
  fields: {
    name: {type: new GraphQLNonNull(GraphQLString)},
    content: {type: new GraphQLNonNull(GraphQLString)},
    postId: {type: new GraphQLNonNull(GraphQLInt)}
  }
})
