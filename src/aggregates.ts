import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async() => {

    // find average age
    const avgAge = await prisma.user.aggregate({
        _avg: {
            age: true
        }
    })

    console.log('change this git')

    // find count of age
    const countAge = await prisma.user.aggregate({
        _count: {
            age: true
        },
    })

    // find number of records
    const countData = await prisma.user.count();

    // find max age
    const maxAge = await prisma.user.aggregate({
        _max: {
            age: true
        }
    })
    console.log("moin")
    // find minimum age
    const minAge = await prisma.user.aggregate({
        _min: {
            age: true
        }
    })

    console.log(minAge)
}

aggregates()