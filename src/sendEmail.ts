import nodemailer from "nodemailer";
import "dotenv/config";
import { IMusicData } from "./interface/main.interface";

// 발신 설정
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 내용 작성, 보내기
export async function sendErrorEmail(result: IMusicData[]) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: "CMWorld MusicData 오류 보고",
    text: JSON.stringify(result, null, 2),
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
  }
}
