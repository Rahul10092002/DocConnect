import { Resend } from "resend";
// import { Email } from "./email";
import { NextResponse } from "next/server";
import EmailTemplate from "@/emails";

const resend = new Resend("re_QPvK9Rbg_GKLEXHorQ9SCg4Z9d5RNg7YY");
export async function POST(req) {
  const response =await req.json();
 
  try {
    
     const { Email } = await req.json(); 
    const data = await resend.emails.send({
      from: "Doctor-Appointment-Booking@nextjs.com",
      to: [Email],
      subject: "Appointment Booking confirmation",
      html: EmailTemplate({ response }),
    });
    console.log(data);
    return NextResponse.json({ data: "email sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
