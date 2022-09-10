
import { PrismaClient } from '@prisma/client'

import { disconnect } from "process"

const prisma =  new PrismaClient()


// Creation of one enregistrement a new user
// for to add it in a Bdd
async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io'
        }
    })

    console.log(user)
}

main()
.then(async ()=>{
    await prisma.$disconnect()
})
.catch(async (e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})


