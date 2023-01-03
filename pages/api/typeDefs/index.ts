import { gql } from 'graphql-tag'

export const typeDefs = gql`
type User {
  collections: [Collection]
  id: String!
  name: String!
}

type Collection {
  cards: [Card]
  id: Int!
  name: String!
}

type Card {
  amount: Int!
  apiID: String!
  id: Int!
  image: String!
  name: String!
}

type SearchCard {
  apiID: String!
  image: String!
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
  image: String!
  legalities: [Legalities]
  manaCost: String
  name: String!
  power: String
  rarity: String
  setName: String
  text: String
  toughness: String
  type: String
}

type Query {
  cardSearch(colors:[String], gameFormat: String, legality:String, name:String!, rarity:String): [SearchCard]
  findUser(name: String!): User!
  findCollection(userName: String!, id: ID!): Collection!
  fetchCardDetails(apiID: String!): CardDetails!
}
`