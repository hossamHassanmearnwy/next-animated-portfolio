import { Inter } from "next/font/google";
import "./globals.css";
let myDisc=""
import TransitionPrividor from "@/components/transitionProvider";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "ElFoad",
  description: myDisc,
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
