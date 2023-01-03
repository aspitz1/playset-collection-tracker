import { Card } from "../../../types"

export const cardSearch = async (_: null, args: { colors: [String], gameFormat: String, legality: String, name: String, rarity: String }) => {
  try {
    // pagination here? how does it work with apollo 
    // error handling for strings ie: color formatting
    const response = await fetch(`https://api.magicthegathering.io/v1/cards?colors=${args.colors ?? ""}&gameFormat=${args.gameFormat ?? ""}&legality=${args.legality ?? ""}&name=${args.name}&rarity=${args.rarity ?? ""}&orderedBy=color&contains=imageUrl`)
    const { cards }: { cards: [Card] } = await response.json()
    const cleanedCardData = cards.map(card => {
      return { apiID: card.id, image: card.imageUrl, name: card.name }
    })
    return cleanedCardData
  } catch {
    throw new Error("No cards found.")
  }
}