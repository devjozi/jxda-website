/**
 * Contact Form API Route
 * 
 * Handles contact form submissions and sends emails using Resend.
 * 
 * File location: app/api/contact/route.ts
 * 
 * Environment variable required in .env.local:
 * RESEND_API_KEY=re_your_api_key_here
 */

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const { name, email, website, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Missing required fields. Please fill in your name, email, and message.' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Invalid email address format.' 
        },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'JX Distribution <onboarding@resend.dev>', // Use this for testing
      // After domain verification, change to: from: 'JX Distribution <contact@jxdistribution.africa>',
      to: ['jxdigitalsupp@gmail.com'], // CHANGE THIS to your email for testing!
      replyTo: email, // User's email - allows you to reply directly
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #007bff; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 20px; margin: 20px 0; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; }
              .value { margin-top: 5px; }
              .footer { text-align: center; color: #777; font-size: 12px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                ${website ? `
                <div class="field">
                  <div class="label">Website:</div>
                  <div class="value"><a href="${website}" target="_blank">${website}</a></div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the JX Distribution Africa contact form.</p>
                <p>Reply directly to this email to respond to ${name}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Log success (helpful for debugging)
    console.log('Email sent successfully:', data);

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you soon.',
    });

  } catch (error) {
    // Log error for debugging
    console.error('Error sending email:', error);

    // Return error response
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to send message. Please try again or contact us directly.' 
      },
      { status: 500 }
    );
  }
}
