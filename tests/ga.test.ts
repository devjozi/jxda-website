import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import trackGAEvent from '../lib/ga';

describe('ga utility', () => {
  const gtagMock = vi.fn();

  beforeEach(() => {
    vi.stubGlobal('gtag', gtagMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.unstubAllGlobals();
  });

  it('calls gtag with correct args', () => {
    trackGAEvent('conversion', { value: 0 });
    expect(gtagMock).toHaveBeenCalledWith('event', 'conversion', { value: 0 });
  });
});
