"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Error handler
const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong.";
  }

  return message;
};

const sendEmail = async (formData: FormData) => {
  let data;
  const email = formData.get("email");
  const message = formData.get("message");

  // Server validations
  if (!message || typeof message !== "string")
    return { error: "Invalid Message" };

  if (!email || typeof email !== "string") return { error: "Invalid Email" };

  try {
    console.log("Sending email...");
    data = await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: "emanuel.nu02@gmail.com",
      subject: "Portfolio Contact Form | Emanuel Nuñez",
      reply_to: email,
      text: message,
    });
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};

export default sendEmail;
