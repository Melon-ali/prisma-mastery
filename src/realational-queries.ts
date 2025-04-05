import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// fluent Api
const relationalQueries = async () => {
    const result = await prisma.user.findUnique({
        where: {
            id: "67ed051996b088539e03958d"
        }
    }).profile()

    // relational fillters
    const publishedPostUsers = await prisma.user.findMany({
        include: {
            post: {
                where: {
                    publish: true
                }
            }
        }
    })

    console.dir(publishedPostUsers, {depth: Infinity})
};
 
relationalQueries();
