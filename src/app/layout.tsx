import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gurunity - Professional Network",
  description: "Connect with professionals and grow your network on Gurunity",
  keywords: "professional network, career, jobs, networking, business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

