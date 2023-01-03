import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { typeDefs } from './typeDefs'
import { findUser, findCollection, fetchCardDetails, cardSearch } from './resolvers'

const resolvers = {
  Query: {
    cardSearch,
    fetchCardDetails,
    findCollection,
    findUser,
  }
}

/*
 - Mutations
  - New Collection for an existing user
  - Update Collection for an existing user (add / delete card)
  - Delete Collection from an existing user
 - Create new user
*/

const server = new ApolloServer({
  resolvers,
  typeDefs,
})

export default startServerAndCreateNextHandler(server)
