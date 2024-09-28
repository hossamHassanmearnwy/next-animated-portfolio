import { Inter } from "next/font/google";
import "./globals.css";

import TransitionPrividor from "@/components/transitionProvider";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Hossam Dev Portfolio App",
  description: "my portfilio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionPrividor >{children}</TransitionPrividor>
      </body>
    </html>
  );
}
