# Format me, then start at section 10

 GraphQL Notes

## Intro
What is graphql? It's a newer querying language with gaining popularity with  large scale companies like facebook, google and yelp
Developed in 2012 by Facebook in tandem with native app support

It's effecient and supports relational data allowing for multiple queries with one request
It uses a type system and enables type-safety
Provides a single endpoint voiding the problem of endpoint hell
It works with any type of database and is versionless

## Graph vs REST
In a typical blog post scheme using a REST approach there will need to be multiple calls to the server to extract meaningful correlated data, or multiple endpoints to cover use cases but that wouldn't scale well without some automation

In Grapql the structure of the query defines the structure of the response and by design with a single query you get exactly what you need
In a simple example GraphQL is arguably faster and more effective than a typical Rest approach

## How it works, Query, Field and Arguments
Queries take a form of
query{
  posts{
    title
  }
}

Says "Query for the titles of every posts". The response will return a posts array with each object containing a title value. Query is the operation while title and posts are both fields.

Fields are a unit of requestable data, Fields can be objects with multiple fields nested within
Arguments can be provided by :
query{
  post(id:3){
    title
  }
}

Says "Give me the title of post with an id = 3"
Every field in nested arguments can take an argument, unlike REST calls which only take a single set arguments per call.

## Aliases and Fragments
In graphql the response matches the request. So if you send:
query{
  post(id: 3){
    title
  }
}

you cannot send:
query{
  post(id: 3){
    title
  }

  post(id: 2){
    title
  }

}

Since the post object in the response would be duplicated and alias would need to be used for querying for duplicate sets of similar data:
query{
  p1: post(id: 3){
    title
  }

  p2: post(id: 2){
    title
  }

}

As this scales, naturally it gets repetitive. As you notice the interior is repetitive, so we use fragments(basically a GraphQL function)
Without fragment:
query{
  p1: post(id: 3){
    title
    content
    author{
      name
    }
  }

  p2: post(id: 2){
    title
    content
    author{
      name
    }
  }

}

With fragment:
query{
  p1: post(id: 3){
    ...basicPostResponse
  }

  p2: post(id: 2){
    ...basicPostResponse
  }
  fragment basicPostResponse on Post{
    title
    content
    author{
      name
    }
  }
}

Using fragments will greatly reduce the size of queries.

## Variables & Mutations
Like most languages you can pass variables into queries, using ! means a variable is required
Take:
query($pID: int!){
  post(id: $pID){
    title,
    content,
    author{
      name
    }
  }
}

Do not use string interpolation to send variables, send them along with the request. interpolation is a known security issue

Queries allow read-only fetching of data on a server
Mutations allow changing of data on server, it accepts a json object with the contents to add:

mutation{
  addPost(post:{title: "Some name",
                content: "Some content",
                author: "Some dude"})
  {
      title,
      content,
      author
  }
}

Ideally you would to use variables like:
mutation($foo: PostInput!){
  addPost(post: $foo)
  {
      title,
      content,
      author
  }
}

On execution a new post would be written to the database, Queries should read only, mutations should be write then read what was written this is a developer convenience.

Queries are concurrent and are done parallel to one another
Mutations are in series to prevent race conditions as one mutation can add data required for another mutations

Each file should correspond to one query or one mutation
## Project Scope
Outline files
Install dependancies
Build a graphQL api
Configure Babel
Write database with Dummy database
Implement request structure

## Project dependancies
- GraphQL
- Babel tools

## Babel Configuration


## Building schemas
A schema defines how ppl can interact with the api and has 4 building blocks:
- Object Types
- Queries
- Input object types
- Mutations
