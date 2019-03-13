import { GraphQLServer } from "graphql-yoga";
import faker from "faker";

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

  type FrameworkParts {
    id: ID!
    name: String!
  }

  type Framework {
    id: ID!
    name: String!
    version: String!
    parts: [FrameworkParts]
  }

  type Query {
    status: String!
    me: User!
    framework: Framework
  }
`;

// Resolvers

const parts = [
  {
    id: faker.random.number(),
    name: "Layout"
  },
  {
    id: faker.random.number(),
    name: "Components"
  },
  {
    id: faker.random.number(),
    name: "Utilities"
  }
];

const resolvers = {
  Query: {
    status: () => "ok",
    me: () => {
      return {
        id: faker.random.number(),
        name: faker.name.findName()
      };
    },
    framework: () => {
      return {
        id: faker.random.number(),
        name: "Bootstra",
        version: "4.3.0",
        parts: parts
      };
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(options, ({ port }) =>
  console.log(`Server is running on localhost:${port}`)
);
