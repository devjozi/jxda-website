/**
 * Unit tests for WhatsApp URL builder.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

const originalEnv = process.env;

afterEach(() => {
  process.env = originalEnv;
  vi.resetModules();
});

describe('buildWhatsAppUrl', () => {
  it('builds a wa.me URL with a default message', async () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_WHATSAPP_NUMBER: '+233 55 511 1222',
      NEXT_PUBLIC_WHATSAPP_MESSAGE: 'Hello from JX',
    };

    const { buildWhatsAppUrl } = await import('../lib/site');
    expect(buildWhatsAppUrl()).toBe('https://wa.me/233555111222?text=Hello%20from%20JX');
  });

  it('uses a custom message when provided', async () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_WHATSAPP_NUMBER: '233555111222',
      NEXT_PUBLIC_WHATSAPP_MESSAGE: 'Default message',
    };

    const { buildWhatsAppUrl } = await import('../lib/site');
    expect(buildWhatsAppUrl('Custom message')).toBe('https://wa.me/233555111222?text=Custom%20message');
  });
});
