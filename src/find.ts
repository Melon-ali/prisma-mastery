import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
// find all
const getAllFromDB = await prisma.post.findMany()


// const findFirst = await prisma.post.findUniqueOrThrow(
//     {
//         where: {
//             id: '67eba791e03f91f9786fa05g'
//         }
//     }
// );

const findUnique = await prisma.post.findUniqueOrThrow(
    {
        where: {
            id: '67ecaf1bb6e4bcf4f39983dc'
        },
        select: {
            title: true,
            content: true,
            authorName: true
        }
    }
);

console.log(findUnique)

};

main()


