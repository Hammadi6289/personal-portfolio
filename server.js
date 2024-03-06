import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import nodemailer from "nodemailer";
const router = express.Router();

// server used to send send emails
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(8080, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("Email user or password not provided.");
  process.exit(1); // Exit the application if credentials are not provided
}

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Server error, message not sent" });
    } else {
      res.status(200).json({ success: true, message: "Message Sent" });
    }
  });
});
