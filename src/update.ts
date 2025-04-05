import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //  const singleUpdate = await prisma.post.updateMany({
  //     where: {
  //         title: "Title 2"
  //     },
  //     data: {
  //         publish:  true
  //     }
  //  })
  //  console.log(singleUpdate)

  const upsertData = await prisma.post.upsert({
    where: {
      id: "67ecaf1bb6e4bcf4f39983dc",
    },
    update: {
      title: "updated Content",
    },
    create: {
      title: "Title 2",
      content: "Content 2",
    },
  });

  console.log(upsertData);
};

updates();
