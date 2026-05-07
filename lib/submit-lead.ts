import trackMetaPixelEvent from './meta-pixel';
import trackGAEvent from './ga';

export async function submitLead(payload: Record<string, unknown>, formspreeId?: string) {
  if (!formspreeId) throw new Error('Formspree ID not configured');
  const endpoint = `https://formspree.io/f/${formspreeId}`;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    try {
      trackMetaPixelEvent('Lead', { content_name: payload.page ?? 'lead', content_ids: [payload.page ?? 'lead'] });
      trackGAEvent('conversion', { event_category: 'lead', value: 0 });
    } catch (err) {
      // ignore
    }
    return true;
  }

  return false;
}

export default submitLead;
