export const trackMetaPixelEvent = (eventName: string, data?: Record<string, unknown>) => {
  const w = (typeof window !== 'undefined' ? window : globalThis) as any;
  if (w && typeof w.fbq === 'function') {
    try {
      w.fbq('track', eventName, data || {});
    } catch (err) {
      // swallow errors to avoid breaking UI
    }
  }
};

export default trackMetaPixelEvent;
