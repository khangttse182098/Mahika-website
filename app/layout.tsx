import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahika Website",
  description:
    "A website to download software to help blind people use computers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
