import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { name, email, phone, message } = await request.json();
    
    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Get email configuration from environment variables or use defaults
    const fromEmail = process.env.FROM_EMAIL || 'delivered@resend.dev';
    const toEmail = process.env.TO_EMAIL || 'contact@thislooksgreat.net';
    const fromName = process.env.FROM_NAME || 'Dental Care Clinic';
    
    // Send email using Resend
    const data = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [toEmail], // Clinic's contact email
      subject: 'New Appointment Request',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message || 'No message provided'}
      `,
      // You can also use HTML for a more formatted email
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
