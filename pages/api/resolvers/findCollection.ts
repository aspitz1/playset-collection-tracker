import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const findCollection = async (_: null, args: { userName: String, id: Number }) => {
  const collection = await prisma.collection.findFirstOrThrow({
    where: { id: Number(args.id) },
    include: {
      cards: true
    }
  })
  const getCardsImagesAndNames = async () => {
    try {
      const response = await Promise.all(collection.cards.map(card => {
        return fetch(`https://api.magicthegathering.io/v1/cards/${card.apiID}`)
      }))
      const data = await Promise.all(response.map(res => res.json()))
      const imagesAndNames = data.reduce((cardObj, cardData) => {
        return { ...cardObj, [cardData.card.id]: { name: cardData.card.name, image: cardData.card.imageUrl ?? "No image available." } }
      }, {})
      return imagesAndNames;
    } catch {
      throw Error("Promise failed, can not get card data.")
    }
  }
  const cardsImagesAndNames = await getCardsImagesAndNames()
  const cards = collection.cards.map(card => {
    return { ...card, name: cardsImagesAndNames[card.apiID].name, image: cardsImagesAndNames[card.apiID].image }
  });
  return { ...collection, cards }
}
