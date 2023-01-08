import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const findCollection = async (_: null, args: { userName: string, id: string }) => {
  try {
    const collection = await prisma.collection.findFirstOrThrow({
      where: { id: args.id },
      include: {
        cards: true
      }
    })
    return collection
  } catch {
    throw new Error("Something has gone wrong. Your collection was not found. Please try again later.")
  }
}
