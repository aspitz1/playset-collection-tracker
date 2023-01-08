import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createCollection = async (_: null, args: { userId: string, collectionName: string, cards: [{ apiID: string, amount: number, imageURL: string, name: string }] }) => {
  try {
    const user = await prisma.user.update({
      where: { id: args.userId },
      data: {
        collections: {
          create: {
            name: args.collectionName,
            cards: {
              createMany: {
                data: args.cards
              }
            }
          }
        }
      },
      include: {
        collections: true,
      }
    })
    const createdCollection = user.collections.find(collection => collection.name === args.collectionName)
    return createdCollection
  } catch {
    throw new Error("Something has gone wrong. Your collection was not created. Please try again later.")
  }
}