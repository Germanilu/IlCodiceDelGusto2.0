import { useTranslations } from "next-intl";
import Hero from './components/hero'
import Cards from "@/app/[locale]/components/cards";
import Testimonials from './components/testimonials';
import QrCode from './components/qr-code';
import Carousel from './components/carousel';
import Contact from './components/contact';
import ScrollToTop from "@/app/[locale]/components/scroll-to-top/index";
import './page.scss';

export const metadata = {
  title: "IlCodiceDelGusto.com",
  description: "Ti aiutiamo a creare il miglior sito web per il tuo ristorante ",
  keywords: "realizzazione siti web,siti web per ristoranti, siti ristoranti, sito web per ristorante, ristorante sito web",
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
      <span className="text">{t('our-works')}</span>
      <Carousel/>
      </div>
      <div id="digital-menu" className="digital-menu-section">
        <QrCode/>
      </div>
      <div id="testimonials" className="testimonials">
        <span className="text">{t('testimonials')}</span>
      <Testimonials />
      </div>
      <div id="contact" className="contact">
        <span className="text">{t('contact')}</span>
        <Contact/>
      </div>
      <ScrollToTop />
    </div>
  )
}

