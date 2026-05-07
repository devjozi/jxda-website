import { describe, it, expect, vi, beforeEach } from 'vitest';
import trackGAEvent from '../lib/ga';

describe('ga utility', () => {
  beforeEach(() => {
    // @ts-ignore
    global.gtag = vi.fn();
  });

  it('calls gtag with correct args', () => {
    // @ts-ignore
    trackGAEvent('conversion', { value: 0 });
    // @ts-ignore
    expect(global.gtag).toHaveBeenCalledWith('event', 'conversion', { value: 0 });
  });
});
