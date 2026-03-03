/**
 * Unit tests for the contact API route validation and responses.
 */
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { NextRequest } from 'next/server';

vi.mock('resend', () => {
  return {
    Resend: class {
      emails = {
        send: vi.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null }),
      };
    },
  };
});

describe('POST /api/contact', () => {
  let originalResendApiKey: string | undefined;

  beforeAll(() => {
    originalResendApiKey = process.env.RESEND_API_KEY;
    process.env.RESEND_API_KEY = 'test-key';
  });

  afterAll(() => {
    if (originalResendApiKey === undefined) {
      delete process.env.RESEND_API_KEY;
    } else {
      process.env.RESEND_API_KEY = originalResendApiKey;
    }
    vi.resetModules();
  });

  it('returns success for a valid payload', async () => {
    const { POST } = await import('../app/api/contact/route');

    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Hello',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      success: true,
      message: 'Thank you! We will contact you soon.',
    });
  });

  it('returns 400 for missing fields', async () => {
    const { POST } = await import('../app/api/contact/route');

    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: '',
        email: 'test@example.com',
        message: '',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('returns 400 for invalid email', async () => {
    const { POST } = await import('../app/api/contact/route');

    const request = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: 'not-an-email',
        message: 'Hello',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });
});
