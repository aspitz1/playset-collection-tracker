import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const findUser = async (_: null, args: { name: String }) => {
  try {    
    const user = await prisma.user.findFirstOrThrow({
      where: { name: String(args.name) },
      include: {
        collections: {
          include: {
            cards: true
          }
        }
      }
    })  
    return user
  } catch {
    throw new Error("Something has gone wrong. Please try to log in again.")
  }
}