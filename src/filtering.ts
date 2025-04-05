import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFilltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          publish: true,
        },
      ],
    },
  });

  const orFilltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          publish: true,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "title",
          },
        },
      ],
    },
  });

  const startsWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "user@ph.com", // endsWith, contains, equals
      },
    },
  });

  const userNameArray = ["user1", "user2", "user3"];

  const userNamesByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });

  const inDepthData = await prisma.user.findUnique({
    where: {
      id: "67ee0539ce4793c1d7b8f247"
    },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true
            }
          }
        }
      }
    }
  })

  console.dir(inDepthData, {depth: Infinity});
};

filtering();
