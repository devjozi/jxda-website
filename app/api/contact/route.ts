/**
 * Contact Form API Route
 * 
 * Handles contact form submissions and sends emails using Resend.
 * 
 * File location: app/api/contact/route.ts
 * 
 * Environment variable required in .env.local:
 * RESEND_API_KEY=re_your_api_key_here
 * 
 * Note: This route is NOT used in static export mode (Hostinger Premium).
 * In static export, the contact form uses Formspree (see NEXT_PUBLIC_CONTACT_FORM_ACTION).
 * This route is only active when deploying to Node.js hosting (Vercel, etc.).
 */

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

/** Escape a string for safe inclusion in an HTML context. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Return the URL only when it uses http: or https:, otherwise return '#'. */
function sanitizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return url;
    }
  } catch {
    // invalid URL – fall through
  }
  return '#';
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email service not configured. Please set RESEND_API_KEY environment variable.',
        },
        { status: 503 }
      );
    }

    // Initialize Resend at runtime (not at module load time)
    // This allows static export builds to succeed even without RESEND_API_KEY
    const resend = new Resend(process.env.RESEND_API_KEY);

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
    const emailFrom = process.env.CONTACT_EMAIL_FROM ?? 'JX Distribution <onboarding@resend.dev>';
    const emailTo = process.env.CONTACT_EMAIL_TO ?? 'jxdigitalsupp@gmail.com';
    const emailResult = await resend.emails.send({
      from: emailFrom,
      to: [emailTo],
      replyTo: email, // User's email - allows you to reply directly
      subject: `New Contact Form Submission from ${escapeHtml(name)}`,
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
                  <div class="value">${escapeHtml(name)}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
                </div>
                ${website ? `
                <div class="field">
                  <div class="label">Website:</div>
                  <div class="value"><a href="${escapeHtml(sanitizeUrl(website))}" target="_blank">${escapeHtml(website)}</a></div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${escapeHtml(message).replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the JX Distribution Africa contact form.</p>
                <p>Reply directly to this email to respond to ${escapeHtml(name)}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Log success (message id only to avoid leaking PII into logs)
    const messageId = ('data' in emailResult && emailResult.data)
      ? emailResult.data.id
      : undefined;
    console.log('Email sent successfully, id:', messageId);

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
