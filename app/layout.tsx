import type { Metadata, Viewport } from "next";
import { Noto_Sans_TC, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Dock from "@/components/Dock";
import Footer from "@/components/Footer";

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=document.documentElement;if(t==='dark'){d.classList.add('dark')}else if(t==='light'){d.classList.add('light')}}catch(e){}})();`;

const notoTC = Noto_Sans_TC({
  variable: "--font-noto-tc",
  weight: ["300", "400", "500", "700"],
  preload: false,
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FLÂNEUR : ROYO",
  description: "漫遊在城市與程式之間。紀錄路上的光影,螢幕前的思考,用理性的代碼與感性的日記,在流逝的時間裡刻下專屬的痕跡。",
};

// viewportFit: cover 讓 env(safe-area-inset-*) 在 iPhone 等有瀏海/手勢條的裝置生效
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      suppressHydrationWarning
      className={`${notoTC.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Dock />
      </body>
    </html>
  );
}
