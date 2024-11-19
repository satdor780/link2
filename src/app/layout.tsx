import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import { Providers } from "./components/redux/provider";

export const metadata: Metadata = {
  title: "самые ядрёные наркотики",
  description: "меф, героин, грибы покупай и сдохни от передоза !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Providers>
        <div className="template">
          <Sidebar />
          <div className="content">
            <Header />
            {children}
          </div>
        </div>
        </Providers>
      </body>
    </html>
  );
}
