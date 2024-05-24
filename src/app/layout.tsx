import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({weight: ["400","700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filosofa Ai",
  description: "Plataforma com objetivo de incentivar a filosofia e o pensamento crítico, um lugar onde pensamentos e ideias se unem. 💡",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
