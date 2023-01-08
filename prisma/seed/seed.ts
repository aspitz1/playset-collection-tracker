import { PrismaClient } from '@prisma/client'
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
                  apiID: "1da2555f-8856-585e-bc39-50a78ad255d6",
                  amount: 4,
                  imageURL: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=175124&type=card",
                  name: "Elvish Visionary"
                },
                {
                  apiID: "5c5b6753-0cfd-5c8e-9ba5-c31c0b0be3b1",
                  amount: 2,
                  imageURL: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=240027&type=card",
                  name: "Craterhoof Behemoth"
                }
              ]
            }
          },
          {
            name: 'Delver',
            cards: {
              create:
              {
                apiID: "f888d8cc-55f9-52fe-a47b-a3abf0b875b4",
                amount: 2,
                imageURL: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442051&type=card",
                name: "Jace, the Mind Sculptor"
              }
            }
          }
        ]
      }
    }
  })
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