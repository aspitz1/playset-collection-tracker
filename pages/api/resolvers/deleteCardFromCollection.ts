import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const deleteCardFromCollection = async (_: null, args: { collectionId: string, cardId: string }) => {
  try {
    const cardName = await prisma.card.delete({
      where: { id: args.cardId },
      select: {
        name: true
      }
    })
    return cardName
  } catch {
    throw new Error("Something has gone wrong. Your card was not deleted. Please try again later.")
  }
}