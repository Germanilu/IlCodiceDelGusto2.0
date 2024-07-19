import { useTranslations }  from "next-intl";
import Contact              from '../components/contact/index';
import './page.scss'

export default function ContactUs(){
  const t = useTranslations("Contact-us");
  return (
    <div className="contact-us-design">
      <h1 className="title">{t('title')}</h1>
      <div className="container-image">
        <div className="contact-container">
          
        </div>
      </div>
      <div className="container-text">
        <div className="profile-data">
          <h2 className="name">LUCIANO GERMANI</h2>
          <h3 className="profession">Full Stack Developer</h3>
          <span className="desc">Ciao a tutti! Sono Luciano, un appassionato sviluppatore Full Stack con un talento per creare esperienze digitali innovative. 
          Il mio viaggio nel mondo della programmazione è stato un'avventura emozionante, e sono entusiasta di condividere con te un assaggio di questa esperienza.</span>
        </div>
        <div className="services-data">
          <h3>Consulenza Web</h3>
          <p>Consulenza web | Consulenza social</p>
          <h3>Sviluppo Web</h3>
          <p>Biglietti da visita virtuali | Menù digitali con qr code| Siti web vetrina semplici | Siti web a pagina singola | Siti web con più pagine | Siti web con più lingue | Rifacimento siti web | Miglioramento siti web | Landing page | Applicazioni web | Gestionali web | Ottimizzazioni web | Ottimizzazioni seo</p>
          <h3>Marketing Web</h3>
          <p>Marketing Web | Marketing Email | Marketing social</p>
          <h3>Web Design</h3>
          <p>Depliant e brochures | Biglietti da visita | Menú digitale</p>
        </div>
        
      </div>
    </div>
  ) 
}