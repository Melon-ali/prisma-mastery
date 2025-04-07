import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async() => {
    const groupPost = await prisma.post.groupBy({
        by: ["publish"],
        _count: {
            title: true
        },
        having: {
            publish: true
        }
    })

    console.log(groupPost)
}

groupBy()