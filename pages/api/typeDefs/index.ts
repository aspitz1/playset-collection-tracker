import { gql } from 'graphql-tag'

export const typeDefs = gql`
type User {
  collections: [Collection]
  id: String!
  name: String!
}

type Collection {
  cards: [Card]
  id: String!
  name: String!
  userId: String!
}

type Card {
  amount: Int!
  apiID: String!
  id: String!
  imageURL: String!
  name: String!
  collectionId: String!
}

type SearchCard {
  apiID: String!
  imageURL: String!
  name: String!
}

type Legalities { 
  format: String
  legalities: String
}

type CardDetails {
  apiID: String!
  artist: String
  colors: [String]
  flavor: String
  imageURL: String!
  legalities: [Legalities]
  manaCost: String
  name: String!
  power: String
  rarity: String
  setName: String
  text: String
  toughness: String
  type: String
  id: String!
}

type CardName {
  name: String!
}

type CollectionName {
  name: String!
}

type Query {
  cardSearch(colors:[String], gameFormat: String, legality:String, name:String!, rarity:String): [SearchCard]
  findUser(name: String!): User!
  findCollection(userName: String!, id: ID!): Collection!
  fetchCardDetails(apiID: String!): CardDetails!
}

input CardInput {
  apiID: String!,
  amount: Int,
  imageURL: String!,
  name: String!
}

type Mutation {
  createCollection(d: String!, collectionName: String!, cards: [CardInput]!): Collection!
  addCardsToCollection(collectionId: String!, cards: [CardInput]!): Collection!
  deleteCardFromCollection(collectionId: String!, cardId: String!): CardName!
  updateCardAmount(cardId: String!, newCardAmount: Int!): Card!
  deleteCollection(collectionId: String!): CollectionName!
}

`