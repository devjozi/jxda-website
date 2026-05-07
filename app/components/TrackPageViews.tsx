"use client";

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import trackMetaPixelEvent from '../../lib/meta-pixel';

export default function TrackPageViews({ gaMeasurementId }: { gaMeasurementId?: string }) {
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
    const w = window as any;

    try {
      if (gaMeasurementId && typeof w.gtag === 'function') {
        w.gtag('config', gaMeasurementId, { page_path: pagePath });
      }
      trackMetaPixelEvent('PageView');
    } catch (err) {
      // ignore
    }
  }, [gaMeasurementId, pathname, searchParams]);

  return null;
}
