import { useTranslations }  from "next-intl";
import Contact              from '../components/contact/index';
import './page.scss'


export const metadata = {
  title: "IlCodiceDelGusto.com",
  description: "Ti aiutiamo a creare il miglior sito web per il tuo ristorante ",
  keywords: "realizzazione siti web,siti web per ristoranti, siti ristoranti, sito web per ristorante, ristorante sito web",
}

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
          <h2 className="name">{t('name')}</h2>
          <h3 className="profession">{t('profession')}</h3>
          <span className="desc">{t('desc')}</span>
        </div>
        <div className="services-data">
          <h3>{t('h1')}</h3>
          <p>{t('p1')}</p>
          <h3>{t('h2')}</h3>
          <p>{t('p2')}</p>
          <h3>{t('h3')}</h3>
          <p>{t('p3')}</p>
          <h3>{t('h4')}</h3>
          <p>{t('p4')}</p>
        </div>
        
      </div>
    </div>
  ) 
}