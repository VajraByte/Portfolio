import express from "express"
import nodemailer from "nodemailer"
import 'dotenv/config' // To load .env variables

const app = express()
const port = 3001 // We'll run the backend on a different port

app.use(express.json())

// This is your API endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, company, phone, message } = req.body

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
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
    res.status(200).json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    res.status(500).json({ message: "Failed to send email" })
  }
})

app.listen(port, () => {
  console.log(`Backend server listening on http://localhost:${port}`)
})