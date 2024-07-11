import { useTranslations } from "next-intl";
import Map from "@/app/[locale]/components/google-map-location/index";
import ScrollToTop from "@/app/[locale]/components/scroll-to-top/index";
import Testimonials   from './components/testimonials';
import Button   from './components/button';
import Script from 'next/script'
import './page.scss';

export const metadata = {
  title: "IlCodiceDelGusto.com",
  description: "Ti aiutiamo a creare il miglior sito web per il tuo ristorante ",
  keywords: "sito ristorante, sito web ristorante"
}

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className='home-design'>
     	<Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/ab72ddd7de4114db12264527/script.js"></Script>
      <Testimonials/>
      <Button/>
      <Map />
      <ScrollToTop />
    </div>
  )
}

