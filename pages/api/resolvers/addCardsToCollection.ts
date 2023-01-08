import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const addCardsToCollection = async (_: null, args: { collectionId: string, cards: [{ apiID: string, amount: number, imageURL: string, name: string }] }) => {
  try {
    const collection = await prisma.collection.update({
      where: { id: args.collectionId },
      data: {
        cards: {
          createMany: {
            data: args.cards
          }
        }
      },
      include: {
        cards: true
      }
    })
    return collection
  } catch {
    throw new Error("Something has gone wrong. Your card was not added. Please try again later.")
  }
}