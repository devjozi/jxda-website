"use client";

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import trackMetaPixelEvent from '../../lib/meta-pixel';

type WindowWithGtag = Window & {
  gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
};

export default function TrackPageViews({
  gaMeasurementId,
  metaPixelId,
}: {
  gaMeasurementId?: string;
  metaPixelId?: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    const w = window as WindowWithGtag;

    try {
      if (gaMeasurementId && typeof w.gtag === 'function') {
        w.gtag('config', gaMeasurementId, { page_path: pagePath });
      }
      if (metaPixelId) {
        trackMetaPixelEvent('PageView');
      }
    } catch {
      // ignore
    }
  }, [gaMeasurementId, metaPixelId, pathname, searchParams]);

  return null;
}
