import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from 'react';
import "./globals.css";
import { CartProvider } from './components/CartProvider';
import TrackPageViews from './components/TrackPageViews';

export const metadata: Metadata = {
  title: "JX Distribution Africa - Just produce or import, we will sell.",
  description:
    "JX Distribution Africa is a registered market execution and distribution company headquartered in Ghana, delivering sales execution, distribution management, marketing activation, market research, and sales automation across all 16 regions.",
  keywords:
    "JX Distribution Africa, Ghana distribution company, sales execution, route to market, route to consumer, distribution management, marketing activation, market research, call center services, sales automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/icon-font.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        {gaMeasurementId && (
          <>
            {/* Google Analytics (gtag.js) */}
            <Script
              id="gtag-js"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-config"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaMeasurementId}');`,
              }}
            />
          </>
        )}

        {metaPixelId && (
          <Script
            id="meta-pixel"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '${metaPixelId}'); fbq('track', 'PageView');`,
            }}
          />
        )}
      </head>
      <body suppressHydrationWarning>
        <CartProvider>{children}</CartProvider>
        <Suspense fallback={null}>
          <TrackPageViews gaMeasurementId={gaMeasurementId} />
        </Suspense>
        {metaPixelId && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
        
        {/* jQuery - Local copy */}
        <Script 
          src="/js/jquery-3.7.1.min.js" 
          strategy="beforeInteractive" 
        />
        
        <Script src="/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
