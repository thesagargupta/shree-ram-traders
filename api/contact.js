import nodemailer from 'nodemailer';

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
          📞 +91 90317 35298</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

  const { name, phone, message } = req.body;

  // Validation
  if (!name || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  try {
    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Shree Ram Traders Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT || 'sagarkshn8@gmail.com',
      subject: `🌾 New Enquiry from ${name} - Shree Ram Traders`,
      html: generateEmailTemplate({ name, phone, message }),
      text: `
New Customer Enquiry - Shree Ram Traders

Name: ${name}
Phone: ${phone}
Message: ${message}

Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `.trim(),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(`✅ Enquiry email sent successfully for ${name} (${phone})`);

    return res.status(200).json({
      success: true,
      message: 'Enquiry sent successfully! We will contact you shortly.',
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Failed to send enquiry. Please try calling us directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
