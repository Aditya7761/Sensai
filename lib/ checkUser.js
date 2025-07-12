import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) return null;

  try {
    // 1. Try by clerkUserId (normal case)
    const existingByClerkId = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (existingByClerkId) return existingByClerkId;

    // 2. Try by email — for user re-signup case
    const email = user.emailAddresses[0].emailAddress;

    const existingByEmail = await db.user.findUnique({
      where: { email },
    });

    if (existingByEmail) {
      // Update the existing record with new clerkUserId
      const updatedUser = await db.user.update({
        where: { email },
        data: {
          clerkUserId: user.id,
          name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
          imageUrl: user.imageUrl,
        },
      });

      return updatedUser;
    }

    // 3. Create new user if no match
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
        imageUrl: user.imageUrl,
        email,
      },
    });

    return newUser;
  } catch (error) {
    console.error("checkUser error:", error.message);
    return null;
  }
};
