"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import ClientProvider from "./clientProvider";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { WagmiProvider } from 'wagmi'
import { config } from '../../config'

const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Royal-Funds",
//   description: "One Vision, Many Chains:",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {/* <QueryClientProvider client={queryClient}>
          {children}
          </QueryClientProvider > */}
          <WagmiProvider config={config}>
           <QueryClientProvider client={queryClient}>
            {children}
            </QueryClientProvider>
          </WagmiProvider>


      </body>
    </html>
  );
}
