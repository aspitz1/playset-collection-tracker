import { PrismaClient } from '@prisma/client';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';

const prisma = new PrismaClient();

const typeDefs = gql`
type User {
  name: String!
  id: String!
  collections: [Collection]
}

type Collection {
  id: Int!
  name: String!
  cards: [Card]
}

type Card {
  id: Int!
  apiID: Int!
  amount: Int!
}

type Query {
  findUser(name: String!): User!
}
`;

const resolvers = {
  Query: {
    findUser: async ( parents: null, args: {name: String}) => {
      const user = await prisma.user.findFirstOrThrow({
        where: { name: String(args.name) },
        include: {
          collections: {
            include: {
              cards: true
            }
          }
        }
      })
      return user;
    },
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server);
