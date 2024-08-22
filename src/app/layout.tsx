"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThirdwebProvider } from "../component/custom/ThirdwebProvider";
import Header2 from "../component/custom/Header2";

const activeChain = "binance-testnet";
const inter = Inter({ subsets: ["latin"] });

// Initialize a QueryClient instance
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <QueryClientProvider client={queryClient}>
        <html lang="en">
          <body className={inter.className}>
            {/* <Header2></Header2> */}
            <ThirdwebProvider>
            {children}
            </ThirdwebProvider>
          </body>
        </html>
      

  );
}
