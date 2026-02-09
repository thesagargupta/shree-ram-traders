import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// CORS Configuration - Allow frontend URL from environment variable
const allowedOrigins = [
  process.env.FRONTEND_URL || 'https://www.shreeramtradersrxl.in',
  'https://www.shreeramtradersrxl.in',
  'https://shreeramtradersrxl.in',
  'http://localhost:8080',
  'http://localhost:5173'
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error configuring email transporter:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Send WhatsApp notification using WhatsApp Business API
const sendWhatsAppNotification = async (data) => {
  const whatsappToken = process.env.WHATSAPP_TOKEN;
  const whatsappPhoneId = process.env.WHATSAPP_PHONE_ID;
  const recipientNumber = process.env.WHATSAPP_RECIPIENT;

  if (!whatsappToken || !whatsappPhoneId || !recipientNumber) {
    console.log('⚠️  WhatsApp credentials not configured, skipping WhatsApp notification');
    return false;
  }

  try {
    const message = `🌾 *New Customer Enquiry*\n━━━━━━━━━━━━━━━━━━━\n\n*Customer Name:*\n${data.name}\n\n*Phone Number:*\n${data.phone}\n\n*Message:*\n${data.message}\n\n━━━━━━━━━━━━━━━━━━━\n⏰ ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}\n\n📞 Call customer: ${data.phone}`;

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${whatsappPhoneId}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${whatsappToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: recipientNumber,
          type: 'text',
          text: { body: message },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ WhatsApp API Error:');
      console.error('Status:', response.status);
      console.error('Error Details:', JSON.stringify(errorData, null, 2));
      console.error('Phone ID:', whatsappPhoneId);
      console.error('Recipient:', recipientNumber);
      return false;
    }

    const result = await response.json();
    console.log(`✅ WhatsApp notification sent successfully to ${recipientNumber}`);
    console.log('WhatsApp API Response:', JSON.stringify(result, null, 2));
    return true;
  } catch (error) {
    console.error('❌ Error sending WhatsApp notification:', error.message);
    return false;
  }
};

// Generate email HTML template
const generateEmailTemplate = (data) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Enquiry - Shree Ram Traders</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .email-container {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #2d5f3f 0%, #1a4028 100%);
          color: white;
          padding: 20px;
          border-radius: 8px 8px 0 0;
          text-align: center;
          margin: -30px -30px 30px -30px;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .header p {
          margin: 5px 0 0 0;
          font-size: 14px;
          opacity: 0.9;
        }
        .content {
          padding: 20px 0;
        }
        .info-row {
          margin-bottom: 20px;
          padding: 15px;
          background-color: #f8f9fa;
          border-left: 4px solid #d4a655;
          border-radius: 4px;
        }
        .info-label {
          font-weight: 600;
          color: #2d5f3f;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        .info-value {
          font-size: 16px;
          color: #333;
          word-wrap: break-word;
        }
        .message-box {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #d4a655;
          margin-top: 20px;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 2px solid #e9ecef;
          text-align: center;
          color: #6c757d;
          font-size: 12px;
        }
        .timestamp {
          color: #6c757d;
          font-size: 13px;
          margin-top: 10px;
        }
        .action-button {
          display: inline-block;
          padding: 12px 24px;
          background: linear-gradient(135deg, #d4a655 0%, #b8924c 100%);
          color: white;
          text-decoration: none;
          border-radius: 6px;
          margin-top: 15px;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>🌾 New Customer Enquiry</h1>
          <p>Shree Ram Traders - Raxaul, Bihar</p>
        </div>
        
        <div class="content">
          <p style="font-size: 16px; margin-bottom: 25px;">
            You have received a new enquiry from your website. Please find the details below:
          </p>
          
          <div class="info-row">
            <div class="info-label">Customer Name</div>
            <div class="info-value">${data.name}</div>
          </div>
          
          <div class="info-row">
            <div class="info-label">Phone Number</div>
            <div class="info-value">
              <a href="tel:${data.phone}" style="color: #2d5f3f; text-decoration: none;">
                📞 ${data.phone}
              </a>
            </div>
          </div>
          
          <div class="message-box">
            <div class="info-label">Customer Message</div>
            <div class="info-value" style="white-space: pre-wrap;">${data.message}</div>
          </div>
          
          <div style="text-align: center; margin-top: 25px;">
            <a href="tel:${data.phone}" class="action-button">
              📞 Call Customer Now
            </a>
          </div>
          
          <div class="timestamp">
            ⏰ Received on: ${new Date().toLocaleString('en-IN', { 
              timeZone: 'Asia/Kolkata',
              dateStyle: 'full',
              timeStyle: 'long'
            })}
          </div>
        </div>
        
        <div class="footer">
          <p>This is an automated email from your website contact form.</p>
          <p><strong>Shree Ram Traders</strong><br>
          Handi Bazar, Raxaul, Bihar - 845305<br>
          📞 +91 94309 46499</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// API endpoint to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, phone, message } = req.body;

  // Validation
  if (!name || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  // Email options
  const mailOptions = {
    from: `"Shree Ram Traders Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECIPIENT || 'sagarkshn8@gmail.com',
    subject: `🌾 New Enquiry from ${name} - Shree Ram Traders`,
    html: generateEmailTemplate({ name, phone, message }),
    // Plain text fallback
    text: `
New Customer Enquiry - Shree Ram Traders

Name: ${name}
Phone: ${phone}
Message: ${message}

Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim(),
  };

  try {
    const notificationResults = {
      whatsapp: false,
      email: false,
    };

    // Try WhatsApp notification first (free and instant)
    console.log('🔄 Attempting WhatsApp notification...');
    notificationResults.whatsapp = await sendWhatsAppNotification({ name, phone, message });

    // Try Email notification
    console.log('🔄 Attempting Email notification...');
    try {
      await transporter.sendMail(mailOptions);
      notificationResults.email = true;
      console.log(`✅ Email notification sent successfully for ${name} (${phone})`);
    } catch (emailError) {
      console.error('❌ Error sending email:', emailError.message);
    }

    // Success if at least one notification method worked
    if (notificationResults.whatsapp || notificationResults.email) {
      const methods = [];
      if (notificationResults.whatsapp) methods.push('WhatsApp');
      if (notificationResults.email) methods.push('Email');
      
      console.log(`✅ Enquiry sent via: ${methods.join(' + ')}`);
      
      return res.status(200).json({
        success: true,
        message: 'Enquiry sent successfully! We will contact you shortly.',
        methods: notificationResults,
      });
    } else {
      throw new Error('All notification methods failed');
    }
  } catch (error) {
    console.error('❌ Error processing enquiry:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send enquiry. Please try calling us directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📧 Email notifications will be sent to: ${process.env.EMAIL_RECIPIENT || 'sagarkshn8@gmail.com'}`);
});

export default app;
