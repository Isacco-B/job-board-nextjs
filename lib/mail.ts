import { sendEmail } from "./helpers";


export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;
  const text = `You are receiving this because you (or someone else) has requested to verify your account with Courseopia.\n\n
  Please use the following verification code to complete the process:\n\n
  Verification Code: ${confirmLink}\n\n
  If you did not request this, please ignore this email and your account will remain unverified.\n`;

  const html = `
    <div
      style="
        font-family: Arial, sans-serif;
        max-width: 500px;
        text-align: center;
        margin: 0 auto;
      "
    >
      <img
        src="https://cloud.isaccobertoli.com/s/CJRzrYr33fXsEJn/download/icon.png"
        alt="BuildYourResume Logo"
        style="max-width: 100px"
      />
      <h2>Confirm Your Identity</h2>
      <p style="font-size: 16px; margin-bottom: 50px;">
        Click on the button below to verify your account.
      </p>
        <a
          href="${confirmLink}"
          style="
            background-color: #ff1b6b;
            color: white;
            font-weight: bold;
            padding: 15px 25px;
            text-decoration: none;
            border-radius: 10px;
            margin-bottom: 50px;
          "
          >Verify Account</a
        >
      <p style="font-size: 16px;">OR copy and paste the following link:</p>
      <p style="font-size: 16px;">${confirmLink}</p>
      <p style="font-size: 14px; color: gray">
        If you didn't try to sign-in or create an account on BuildYouResume, you can
        ignore this email.
      </p>
    </div>
  `;

  await sendEmail({
    to: email,
    subject: "Confirm your identity",
    text,
    html,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;
  const text = `You are receiving this because you (or someone else) has requested the reset of the password for your account.\n\n
  Please click on the following link, or paste this into your browser to complete the process:\n\n
  ${resetLink}\n\n
  If you did not request this, please ignore this email and your password will remain unchanged.\n`;
  const html = `<p>You are receiving this because you (or someone else) has requested the reset of the password for your account.</p>
    <p>Please click on the following link, or paste this into your browser to complete the process:</p>
    <p><a href="${resetLink}">${resetLink}</a></p>
    <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`;

  await sendEmail({
    to: email,
    subject: "Password Reset Request for Courseopia",
    text,
    html,
  });
};
