import nodemailer from "nodemailer"

// This function will be turned into a serverless function by Vercel
export default async function handler(req, res) {
  // We only want to handle POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  
  try {
    const { name, email, company, phone, message } = req.body

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // Vercel uses process.env for environment variables
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: "ommmmsathe6779@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)
    return res.status(200).json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return res.status(500).json({ message: "Failed to send email" })
  }
}