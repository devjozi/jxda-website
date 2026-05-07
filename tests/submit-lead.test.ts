import { describe, it, expect, vi, beforeEach } from 'vitest';
import { submitLead } from '../lib/submit-lead';

describe('submitLead', () => {
  beforeEach(() => {
    // @ts-ignore
    global.fetch = vi.fn(() => Promise.resolve({ ok: true })) as any;
    // @ts-ignore
    global.fbq = vi.fn();
    // @ts-ignore
    global.gtag = vi.fn();
  });

  it('posts to formspree and fires analytics', async () => {
    const ok = await submitLead({ page: 'direct-execution' }, 'test-id');
    expect(ok).toBe(true);
    // @ts-ignore
    expect(global.fetch).toHaveBeenCalled();
    // @ts-ignore
    expect(global.fbq).toHaveBeenCalled();
    // @ts-ignore
    expect(global.gtag).toHaveBeenCalled();
  });
});
