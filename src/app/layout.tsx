import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import FooterCta from "@/components/FooterCta";
import Footer from "@/components/Footer";
import AvatarChat from "@/components/AvatarChat";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Surya Prakash Pandey — B2B Product Management, Data & AI",
  description:
    "Surya Prakash Pandey — B2B Product Manager building Data & AI products end-to-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main id="top">{children}</main>
        <FooterCta />
        <Footer />
        <AvatarChat />
        <ScrollReveal />
      </body>
    </html>
  );
}
