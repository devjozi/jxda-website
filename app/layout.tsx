import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "JX Distribution Africa - Logistics & Distribution Solutions",
  description: "Your trusted logistics and distribution partner across Africa. Professional freight, warehousing, and supply chain solutions.",
  keywords: "logistics, distribution, freight, warehousing, Africa, Ghana, supply chain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Bootstrap CSS */}
        <link 
          rel="stylesheet" 
          href="/css/bootstrap.min.css" 
        />
        
        {/* Bootstrap Icons (if template uses them) */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        
        {/* Template Custom CSS - Add all CSS files from your template */}
        <link rel="stylesheet" href="/css/style.css" />
        {/* Add other CSS files as needed, for example: */}
        {/* <link rel="stylesheet" href="/css/responsive.css" /> */}
        {/* <link rel="stylesheet" href="/css/animate.css" /> */}
      </head>
      <body suppressHydrationWarning>
        {children}
        
        {/* jQuery - Local copy */}
        <Script 
          src="/js/jquery-3.7.1.min.js" 
          strategy="beforeInteractive" 
        />
        
        {/* Bootstrap Bundle JS (from CDN temporarily) */}
        <Script 
          src="/js/bootstrap.bundle.min.js" 
          strategy="lazyOnload" 
        />
        
        {/* Template Custom JS - Add all JS files from your template */}
        {/* <Script src="/js/main.js" strategy="lazyOnload" /> */}
        {/* <Script src="/js/custom.js" strategy="lazyOnload" /> */}
      </body>
    </html>
  );
}
