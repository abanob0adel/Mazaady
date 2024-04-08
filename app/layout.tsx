import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import ReactQuery from "@/lib/ReactQuery";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mazaady",
  description: "Mazaady App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ReactQuery>{children} </ReactQuery>
      </body>
    </html>
  );
}
