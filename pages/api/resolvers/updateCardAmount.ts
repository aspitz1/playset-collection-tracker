import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const updateCardAmount = async (_: null, args: { cardId: string, newCardAmount: number }) => {
  try {
    const card = await prisma.card.update({
      where: { id: args.cardId },
      data: { amount: Number(args.newCardAmount) },
      select: {
        name: true,
        id: true,
        apiID: true,
        amount: true,
        imageURL: true,
        collectionId: true
      }
    })
    return card
  } catch {
    throw new Error("Something has gone wrong. The card amount was not updated. Please try again later.")
  }
}