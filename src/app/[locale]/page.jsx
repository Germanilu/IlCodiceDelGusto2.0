import { useTranslations } from "next-intl";
import ScrollToTop from "@/app/[locale]/components/scroll-to-top/index";
import Testimonials   from './components/testimonials';
import './page.scss';
import Hero from './components/hero'

export const metadata = {
  title: "IlCodiceDelGusto.com",
  description: "Ti aiutiamo a creare il miglior sito web per il tuo ristorante ",
  keywords: "sito ristorante, sito web ristorante"
}

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className='home-design'>
      <Hero/>
      <div id="what-we-offer" className="what-we-offer-section">
        WHAT DO WE OFFER
      </div>
      <div id="projects" className="project-section">
        PROJECTS
      </div>
      <div id="digital-menu" className="digital-menu-section">
        QR CODE
      </div>
      <Testimonials/>
      <ScrollToTop />
    </div>
  )
}

