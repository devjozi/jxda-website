export const trackGAEvent = (eventName: string, params?: Record<string, unknown>) => {
  const w = (typeof window !== 'undefined' ? window : globalThis) as any;
  if (w && typeof w.gtag === 'function') {
    try {
      w.gtag('event', eventName, params || {});
    } catch (err) {
      // ignore
    }
  }
};

export default trackGAEvent;
