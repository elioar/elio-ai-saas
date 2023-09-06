import { auth } from "@clerk/nextjs";
import prismadb from "./prismadb";
import { MAX_FREE_COUNTS } from "@/constants";

export const increaseApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  try {
    await prismadb.userApiLimit.upsert({
      where: { userId },
      create: { userId, count: 1 },
      update: { count: { increment: 1 } },
    });
  } catch (error) {
    // Handle any database errors here
    console.error("Error increasing API limit:", error);
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  try {
    const userApiLimit = await prismadb.userApiLimit.findUnique({
      where: {
        userId,
      },
    });

    return !userApiLimit || userApiLimit.count < MAX_FREE_COUNTS;
  } catch (error) {
    // Handle any database errors here
    console.error("Error checking API limit:", error);
    return false; // Assume the limit is not exceeded on error
  }
};

export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  try {
    const userApiLimit = await prismadb.userApiLimit.findUnique({
      where: {
        userId,
      },
    });

    return userApiLimit?.count || 0;
  } catch (error) {
    // Handle any database errors here
    console.error("Error fetching API limit count:", error);
    return 0; // Assume zero count on error
  }
};
