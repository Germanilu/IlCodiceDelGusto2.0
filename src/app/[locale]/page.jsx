import { useTranslations } from "next-intl";
import Hero from './components/hero'
import Cards from "@/app/[locale]/components/cards";
import Testimonials from './components/testimonials';
import QrCode from './components/qr-code';
import ScrollToTop from "@/app/[locale]/components/scroll-to-top/index";
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
      <Hero />
      <div id="what-we-offer" className="what-we-offer-section">
        <span className="text">{t('what-we-offer')}</span>
        <Cards />
      </div>
      <div id="projects" className="project-section">
     
      </div>
      <div id="digital-menu" className="digital-menu-section">
        <QrCode/>
      </div>
      <Testimonials />
      <ScrollToTop />
    </div>
  )
}

