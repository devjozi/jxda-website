import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { submitLead } from '../lib/submit-lead';

describe('submitLead', () => {
  const fetchMock = vi.fn();
  const fbqMock = vi.fn();
  const gtagMock = vi.fn();

  beforeEach(() => {
    fetchMock.mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', fetchMock);
    vi.stubGlobal('fbq', fbqMock);
    vi.stubGlobal('gtag', gtagMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.unstubAllGlobals();
  });

  it('posts to formspree and fires analytics', async () => {
    const payload = { page: 'sales-solutions-lead-gen' };
    const ok = await submitLead(payload, 'test-id');
    expect(ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledWith('https://formspree.io/f/test-id', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    expect(fbqMock).toHaveBeenCalledWith('track', 'Lead', {
      content_name: 'sales-solutions-lead-gen',
      content_ids: ['sales-solutions-lead-gen'],
    });
    expect(gtagMock).toHaveBeenCalledWith('event', 'conversion', {
      event_category: 'lead',
      value: 0,
    });
  });
});
