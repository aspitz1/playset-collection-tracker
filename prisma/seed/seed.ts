import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function main() {
  const wellWisher = await prisma.user.upsert({
    where: { name: '_WellWisher' },
    update: {},
    create: {
      name: '_WellWisher',
      collections: {
        create: [
          {
            name: 'Legacy Elves',
            cards: {
              create: [
                {
                  apiID: 187597,
                  amount: 4
                },
                {
                  apiID: 340692,
                  amount: 2
                }
              ]
            }
          },
          {
            name: 'Delver',
            cards: {
              create:
              {
                apiID: 490061,
                amount: 2
              }
            }
          }
        ]
      }
    }
  })
  console.log(wellWisher);
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })