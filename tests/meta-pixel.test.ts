import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import trackMetaPixelEvent from '../lib/meta-pixel';

describe('meta-pixel utility', () => {
  const fbqMock = vi.fn();

  beforeEach(() => {
    vi.stubGlobal('fbq', fbqMock);
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.unstubAllGlobals();
  });

  it('calls fbq with correct args', () => {
    trackMetaPixelEvent('Lead', { foo: 'bar' });
    expect(fbqMock).toHaveBeenCalledWith('track', 'Lead', { foo: 'bar' });
  });
});
