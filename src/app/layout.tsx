import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["thai"],
  variable: "--font-noto-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SR Travel - บริการรถเช่าท่องเที่ยว และการเดินทางครบวงจร | Premium Car Rental & Travel",
  description: "บริการเช่ารถท่องเที่ยว เส้นทางยอดนิยม รถเช่าขับเอง รถพร้อมคนขับ และบริการรับส่งสนามบิน พร้อมการดูแลระดับพรีเมียม",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="th" 
      className={`${plusJakartaSans.variable} ${notoSansThai.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FDFDFE] text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
