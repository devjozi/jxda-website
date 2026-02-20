import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
      </head>
      <body suppressHydrationWarning>
        {children}
        
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
