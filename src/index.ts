import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
//   const result = await prisma.post.create({
//     data: {
//         title: "This is Title 2",
//         content: "This is Content 2",
//         authorName: "Rubel Ali 2"
//     }
//   })

//   console.log(result)

const getAllFromDB = await prisma.post.findMany()

console.log(getAllFromDB)

};

main();
