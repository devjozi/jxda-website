import { describe, it, expect, vi, beforeEach } from 'vitest';
import trackMetaPixelEvent from '../lib/meta-pixel';

describe('meta-pixel utility', () => {
  beforeEach(() => {
    // @ts-ignore
    global.fbq = vi.fn();
  });

  it('calls fbq with correct args', () => {
    // @ts-ignore
    trackMetaPixelEvent('Lead', { foo: 'bar' });
    // @ts-ignore
    expect(global.fbq).toHaveBeenCalledWith('track', 'Lead', { foo: 'bar' });
  });
});
