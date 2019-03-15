import { GraphQLServer } from "graphql-yoga";
import faker from "faker";

import { templates, frameworks, libraries } from "./data";
console.log({ templates, frameworks, libraries });

// GraphQL yoga options
const options = {
  port: 4000
  // endpoint: '/graphql',
  // subscriptions: '/subscriptions',
  // playground: '/playground',
};

// Type definitions
const typeDefs = `

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Part {
    code: String
    content(content: String): String
    parts(code: String, content: String): [Part]
  }

  type Query {
    status: String!
    me: User!
    parts(code: String, content: String): [Part]
  }
`;

// Resolvers
const resolvers = {
  Query: {
    status() {
      return "ok";
    },
    me() {
      return {
        id: faker.random.number(),
        name: faker.name.findName()
      };
    },
    parts(parent, args, context, info) {
      console.log({ parent });
      console.log({ args });

      return [
        {
          code: args.code,
          content: args.content
        }
      ];
    }
  },
  Part: {
    content(parent, args, context, info) {
      console.log("Part", "content", { parent });
      console.log("Part", "content", { args });

      return args.content;
    },
    parts(parent, args, context, info) {
      console.log({ parent });
      console.log({ args });

      return [
        {
          code: args.code,
          content: args.content
        }
      ];
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(options, ({ port }) =>
  console.log(`Server is running on localhost:${port}`)
);
