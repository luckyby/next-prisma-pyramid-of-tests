import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {

  async function main() {
    const result = await prisma.persons.findMany({
      where: {
        lastname: "Pan",
      },
    })
    console.log('result:', result[0].firstname)
    res.status(200)
      .end(`Hello ${result[0].lastname} with firstname ${result[0].firstname}`)

  }


  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}