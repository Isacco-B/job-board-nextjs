import { db } from "@/lib/db";

export async function getPasswordResetByEmail(email: string) {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: { email },
    });
    return passwordResetToken;
  } catch (error) {
    return null;
  }
}

export async function getPasswordResetByToken(token: string) {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: { token },
    });
    return passwordResetToken;
  } catch (error) {
    return null;
  }
}