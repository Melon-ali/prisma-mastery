import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const paginationSorting = async() => {
    // offset Pagination
    const offsetData = await prisma.post.findMany({
        skip: 5,
        take: 2
    })
    // console.log("Offset Pagination data", offsetData)

    const cursorData = await prisma.post.findMany({
        skip: 5,
        take: 2,
        cursor: {
            id: "67ecb4f51b120fc9f5c31544"
        }
    })
    // console.log("Cursor Based Paginated data", cursorData)

    // sorting
    const sortedData = await prisma.post.findMany({
        orderBy: {
            id: "asc"
        },
        where: {
            title: "Title 1"
        }
    })
    console.log("Sorted Data", sortedData)
}

paginationSorting()