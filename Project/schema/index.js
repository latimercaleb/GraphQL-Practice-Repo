/*
  In this schema we import all the queries and mutations and use the spread operator to destruct them as fields in the schema,now graphql will use this schema to handle queries and Mutations

  At this point it is ready for testing
*/
import {GraphQLSchema,GraphQLObjectType} from 'graphql';
import posts from './queries/posts';
import post from './queries/post';
import author from './queries/author';
import addPost from './mutations/addPost';
import addComment from './mutations/addComment';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQuery',
      fields: () => ({
        ...posts,
        ...post,
        ...author
      })
    }),
    mutation: new GraphQLObjectType({
      name: 'RootMutation',
      fields: () => ({
        ...addPost,
        ...addComment
      })
    })
})
