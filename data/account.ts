import { db } from "@/lib/db";

export async function getAccountByEmail(userId: string) {
  try {
    const account = await db.account.findUnique({ where: { userId } });
    return account;
  } catch (error) {
    return null;
  }
}
