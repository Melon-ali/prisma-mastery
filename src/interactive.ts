import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async (transactionClient) => {
    // query 1
    const getAllPost = await transactionClient.post.findMany({
      where: {
        publish: true,
      },
    });

    // query 2
    const countUser = await transactionClient.user.count();

    // query 3

    const updateUser = await transactionClient.user.update({
      where: {
        id: "67ee0539ce4793c1d7b8f247",
      },
      data: {
        age: 45,
      },
    });

    return {
      getAllPost,
      countUser,
      updateUser,
    };
  });
  console.log(result);
};

interactiveTransaction();
