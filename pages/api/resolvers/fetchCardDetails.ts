export const fetchCardDetails = async (_: null, args: { apiID: String }) => {
  try {
    const response = await fetch(`https://api.magicthegathering.io/v1/cards/${args.apiID}`)
    const { card } = await response.json()
    const cleanCardData = {
      apiID: card.id,
      artist: card.artist,
      colors: card.colors,
      flavor: card.flavor,
      image: card.imageUrl,
      legalities: card.legalities,
      manaCost: card.manaCost,
      name: card.name,
      power: card.power,
      rarity: card.rarity,
      setName: card.setName,
      text: card.text,
      toughness: card.toughness,
      type: card.type
    }
    return cleanCardData
  } catch {
    throw Error("Card not found.")
  }
}