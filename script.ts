
import { PrismaClient } from '@prisma/client'

import { disconnect } from "process"

const prisma =  new PrismaClient()


// // show the user without the relation table (posts)
// async function main(){
//     const user = await prisma.user.create({
//         data: {
//             name: 'Bob',
//             email: 'bob@prisma.io',
//             posts:{
//                 create:{
//                     title: 'Hello world'
//                 }
//             }
//         }
//     })
 
//     console.log(user)
// }


// main()
// .then(async () =>{
//     await prisma.$disconnect()
// })
// .catch(async e =>{
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
// })



// Show the user with the relation table
async function main(){
    const userWithPosts = await prisma.user.findMany({
        include:{
            posts: true
        }
    })
    console.dir(userWithPosts, {depth: null})
}

main()
.then(async () =>{
    await prisma.$disconnect()
})
.catch(async e =>{
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
})


