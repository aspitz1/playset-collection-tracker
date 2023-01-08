import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { typeDefs } from './typeDefs'
import { addCardsToCollection, deleteCardFromCollection, deleteCollection, cardSearch, createCollection, fetchCardDetails, findCollection, findUser, updateCardAmount } from './resolvers'

const resolvers = {
  Query: {
    cardSearch,
    fetchCardDetails,
    findCollection,
    findUser,
  },
  Mutation: {
    addCardsToCollection,
    deleteCardFromCollection,
    deleteCollection,
    createCollection,
    updateCardAmount
  }
}

/*
 - Mutations
 - Create new user
*/

const server = new ApolloServer({
  resolvers,
  typeDefs,
})

export default startServerAndCreateNextHandler(server)
