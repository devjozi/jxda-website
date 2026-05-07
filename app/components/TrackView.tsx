"use client";
import { useEffect } from 'react';
import trackMetaPixelEvent from '../../lib/meta-pixel';
import trackGAEvent from '../../lib/ga';

export default function TrackView({ contentName, contentId }: { contentName: string; contentId: string }) {
  useEffect(() => {
    try {
      trackMetaPixelEvent('ViewContent', { content_name: contentName, content_ids: [contentId] });
      trackGAEvent('view_item', { items: [{ item_id: contentId, item_name: contentName }] });
    } catch (err) {
      // ignore
    }
  }, [contentName, contentId]);

  return null;
}
