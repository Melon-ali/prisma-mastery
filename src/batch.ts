import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransction = async () => {
    const createUser = prisma.user.create({
        data: {
            username: "RubelAli",
            email: "rubelali@gmail.com"
        }
    })


    const updateUser = prisma.user.update({
        where: {
            id: "67ee680bf96d33952198dc41"
        },
        data: {
            age: 30
        }
    })
    
    const [userData, updateData] = await prisma.$transaction([
        createUser,
        updateUser
    ])

    console.log(userData, updateData)
}

batchTransction()