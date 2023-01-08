import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const deleteCollection =async (_: null, args: { collectionId: string }) => {
  try {
    const collectionName = prisma.collection.delete({
      where: { id: args.collectionId },
      select: {
        name: true
      }
    })
    return collectionName
  } catch {
    throw new Error("Something has gone wrong. Your collection was not deleted. Please try again later.")
  }
}