import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Log that we received a request
    console.log('Received form submission request');
    
    // Parse the request body
    const { name, email, phone, message } = await request.json();
    console.log('Form data:', { name, email, phone, hasMessage: !!message });
    
    // Validate required fields
    if (!name || !email || !phone) {
      console.error('Validation error: Missing required fields');
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Get email configuration from environment variables or use defaults
    const fromEmail = process.env.FROM_EMAIL || 'delivered@resend.dev';
    const toEmail = process.env.TO_EMAIL || 'contact@thislooksgreat.net';
    const fromName = process.env.FROM_NAME || 'Dental Care Clinic';
    
    // Log email configuration (without sensitive data)
    console.log('Using email configuration:', { 
      fromName, 
      fromEmail, 
      toEmail: toEmail.substring(0, 3) + '***' // Log partial email for privacy
    });
    
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('Resend API key is not configured');
      throw new Error('Email service is not properly configured');
    }
    
    // Send email using Resend
    console.log('Attempting to send email via Resend...');
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
    
    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
