import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Everything below is typed by website visitors and lands in an HTML email,
// so it must be escaped or a visitor could inject links and markup into the
// inbox.
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const [name, email, contact, message] = [
      body.name,
      body.email,
      body.contact,
      body.message,
    ].map((field) => (typeof field === 'string' ? field.trim() : ''));

    // ✅ Validate required fields
    if (!name || !email || !contact || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // ✅ Create transporter (use env vars in production)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // e.g. your Gmail
        pass: process.env.EMAIL_PASS, // App password if 2FA
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'anushay@buraqsociety.org',
      // Mail is sent from the site's own account; this makes "Reply" in the
      // inbox go to the person who asked rather than back to that account.
      replyTo: { name, address: email },
      subject: 'Question from Buraq Society Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #040149; border-bottom: 2px solid #DBB13B; padding-bottom: 10px;">
            New Question from Website
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #040149; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p><strong>Contact Number:</strong> ${escapeHtml(contact)}</p>
          </div>

          <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #040149; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #333;">${escapeHtml(message).replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #040149; color: white; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">This message was sent from the Buraq Society website contact form.</p>
          </div>
        </div>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}
