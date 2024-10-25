import {NextIntlClientProvider, useMessages} from 'next-intl';
import Navbar                                from './components/navbar/index';
import Footer                                from './components/footer/index';
import ResponsiveLayout                      from './components/responsive/responsiveLayout';
import { Inter }                             from "next/font/google";
import { useLocale }                         from "next-intl";
import { notFound }                          from "next/navigation";
import { Providers }                         from "../Redux/provider";
import ScrollToTop from "@/app/[locale]/components/scroll-to-top/index";
import Whatsapp from "@/app/[locale]/components/whatsapp/index";
import favicon from '../public/favicon.ico'
import Script from 'next/script'
import "./globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Il Codice del Gusto",
  description: "Ti aiutiamo a creare il miglior sito web per il tuo ristorante ",
  keyword: "realizzazione siti web,siti web per ristoranti, siti ristoranti, sito web per ristorante, ristorante sito web",
  icons: {
    icon: favicon.src, 
  }
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();
  const messages = useMessages();
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <ResponsiveLayout />
            <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/ab72ddd7de4114db12264527/script.js"></Script>
            {/* google analytcs */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9RX88331DS"></Script>
            <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9RX88331DS');
        `}
      </Script>
            {/* <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="4b888c1a-2a74-4132-8f39-674f4881c80b" data-blockingmode="auto" type="text/javascript"></Script> */}
            <Navbar />
            <ScrollToTop />
            <Whatsapp />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}