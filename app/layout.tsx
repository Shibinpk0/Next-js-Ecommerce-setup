import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/react";
import { CartStoreProvider } from "./provider/cartstoreprovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | holla",
    default: "shibin",
  },
  description: "hello how are u",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NuqsAdapter>
          <CartStoreProvider>{children}</CartStoreProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { NuqsAdapter } from "nuqs/adapters/next/app";
// import { CartStoreProvider } from "./provider/cartstoreprovider";

// export const metadata: Metadata = {
//   title: "ShopNow",
//   description: "ShopNow ecommerce application",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <NuqsAdapter>
//           <CartStoreProvider>{children}</CartStoreProvider>
//         </NuqsAdapter>
//       </body>
//     </html>
//   );
// }
