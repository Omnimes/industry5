import { NextResponse, type NextRequest } from "next/server"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    const errorMessage = "Wiadomość nie może zostać wysłana z powodu brakujących danych."
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }

  const transport = nodemailer.createTransport({
    service: "atthost24",
    host: "mp1.atthost24.pl",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL as string,
      pass: process.env.MY_PASSWORD as string,
    },
  })

  const mailOptions: Mail.Options = {
    from: `${name} - ${email}`,
    to: process.env.MY_EMAIL as string,
    sender: email,
    replyTo: email,
    subject: `Message from ${name} (${email})`,
    text: `
      Wiadomość od ${name} 
      Email: ${email}
      Wiadomość: ${message}
    `,
    cc: ["PSierant@multiprojekt.pl"],
  }

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("sent")
        } else {
          reject(err.message)
        }
      })
    })

  try {
    await sendMailPromise()
    return NextResponse.json({ message: "sent", success: true })
  } catch (err) {
    return NextResponse.json({ message: "error", error: true }, { status: 500 })
  }
}
