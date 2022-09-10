
import { PrismaClient } from '@prisma/client'

import { disconnect } from "process"

const prisma =  new PrismaClient()


// Retrieve all (user) data 
async function main(){
    const users = await prisma.user.findMany()
    console.log(users)
}

main()
.then(async ()=>{
    await prisma.$disconnect()
})
.catch(async e =>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})






