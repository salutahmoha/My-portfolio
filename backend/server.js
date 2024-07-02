const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const nodemailer = require('nodemailer'); // Import nodemailer module


const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'portfolio'
});

// Middleware
app.use(bodyParser.json());

// POST endpoint for sending email
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    
        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'salutahmoha@gmail.com', // Your Gmail email address
                pass: 'cwci uxpj qexb fucp' // Your Gmail password
            }
        });

        // Configure the email data
        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'salutahmoha@gmail.com', // Destination email address
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ error: 'Failed to send email.' });
            } else {
                console.log('Email sent:', info.response);
                return res.status(200).json({ message: 'Email sent successfully.' });
            }
        });
    });
// Start server
app.listen(3002, () => {
    console.log('Listening......');
});
