import {NextIntlClientProvider, useMessages} from 'next-intl';
import Navbar                                from './components/navbar/index';
import Footer                                from './components/footer/index';
import ResponsiveLayout                      from './components/responsive/responsiveLayout';
import { Inter }                             from "next/font/google";
import { useLocale }                         from "next-intl";
import { notFound }                          from "next/navigation";
import { Providers }                         from "../Redux/provider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Default title",
  description: "Default description",
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
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}