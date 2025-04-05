import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
//   const singleDelete = await prisma.post.delete({
//     where: {
//       id: "67ebb7457987972feeeb1be2",
//     },
//   });

const deleteMany = await prisma.post.deleteMany({
    where: {
        publish: false
    }
})

  console.log(deleteMany);
};

deleteData();
