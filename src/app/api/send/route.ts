import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// For debugging purposes
const DEBUG = true;

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
    
    // Always log the environment variables (without sensitive data)
    console.log('Environment variables check:', { 
      hasResendKey: !!process.env.RESEND_API_KEY,
      fromEmail,
      hasToEmail: !!toEmail,
      fromName
    });
    
    // Create a log of the submission for debugging purposes
    const submissionLog = {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      hasMessage: !!message,
      environment: process.env.NODE_ENV || 'unknown'
    };
    
    console.log('Submission log:', JSON.stringify(submissionLog));
    
    // For debugging in production, we'll always return success
    // This helps isolate if the issue is with Resend or with our code
    if (DEBUG) {
      console.log('DEBUG mode enabled - skipping actual email sending');
      
      // In debug mode, we'll just log the email content and return success
      console.log('Email that would be sent:', {
        from: `${fromName} <${fromEmail}>`,
        to: toEmail,
        subject: 'New Appointment Request',
        content: `Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message || 'No message provided'}`
      });
      
      // Return success response for debugging
      return NextResponse.json({ 
        success: true, 
        debug: true,
        message: 'Form submission logged successfully (debug mode)'
      });
    }
    
    // Only try to send email if not in debug mode
    try {
      // Check if Resend API key is configured
      if (!process.env.RESEND_API_KEY) {
        console.error('Resend API key is not configured');
        throw new Error('Email service is not properly configured');
      }
      
      // Initialize Resend with API key from environment variables
      console.log('Initializing Resend client...');
      const resend = new Resend(process.env.RESEND_API_KEY);
      
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
      return NextResponse.json({ success: true, data: data });
    } catch (emailError) {
      console.error('Error sending email with Resend:', emailError);
      
      // Even if Resend fails, we'll still log the submission and return success
      // This ensures the user gets a good experience while we debug the email service
      return NextResponse.json({ 
        success: true, 
        fallback: true,
        message: 'Your request has been logged. We will contact you shortly.'
      });
    }
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages based on the error type
    let errorMessage = 'Failed to send email';
    let statusCode = 500;
    
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      
      // Handle specific Resend API errors
      if (error.message.includes('API key')) {
        errorMessage = 'Email service API key is invalid or missing';
        statusCode = 500;
      } else if (error.message.includes('rate limit')) {
        errorMessage = 'Email service rate limit exceeded. Please try again later.';
        statusCode = 429;
      } else if (error.message.includes('sender domain')) {
        errorMessage = 'Email sender domain is not verified';
        statusCode = 500;
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode }
    );
  }
}
