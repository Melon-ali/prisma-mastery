import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // const createUser = await prisma.user.create({
    //   data: {
    //     username: "user",
    //     age: 30,
    //     email: "user@ph.com",
    //     role: UserRole.user,
    //   },
    // });

  // const createProfile = await prisma.profile.create({
  //     data: {
  //         bio: "This is bio",
  //         userId: "67ee0539ce4793c1d7b8f247"
  //     }
  // })

  // const createCategory = await prisma.category.create({
  //     data: {
  //         name: "Node js"
  //     }
  // })

  // const createPost = await prisma.post.create({
  //     data: {
  //         title: "This is title",
  //         content: "This is content of the post",
  //         authorId: "67ee0539ce4793c1d7b8f247"
  //     }
  // })

  const createPost = await prisma.post.create({
    data: {
      title: "This is title",
      content: "This is content of the post",
      authorId: "67ee0539ce4793c1d7b8f247",
      postCategory: {
        create: [
            {
                categoryId: "67ee0639de0237c25fd7b701"
            },
            {
                categoryId: "67ee065e19d02c4ecf98e279"
            },
            {
                categoryId: "67ee067eb3d704f53908ab0d"
            },
        ]
      },
    },
    include: {
        postCategory: true
    }
  });

  console.log("User Created:", createPost);
};

main();
