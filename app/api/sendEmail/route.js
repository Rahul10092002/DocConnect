import { Resend } from "resend";
// import { Email } from "./email";
import { NextResponse } from "next/server";
import EmailTemplate from "@/emails";

const resend = new Resend("re_QPvK9Rbg_GKLEXHorQ9SCg4Z9d5RNg7YY");
export async function POST(req) {
  const response =await req.json();
 console.log(response.data.data.attributes.Email);
  try {
    
    //  const { Email } = await req.json(); 
    const data = await resend.emails.send({
      from: "Doctor-Appointment-Booking@example.com",
      to: [response.data.data.attributes.Email],
      subject: "Appointment Booking confirmation",
      react: EmailTemplate({ response }),
    });
    console.log("datra"+data);
    return NextResponse.json({ data: "email sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
