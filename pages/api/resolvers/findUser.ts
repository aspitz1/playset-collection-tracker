import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const findUser = async (_: null, args: { name: String }) => {
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
}