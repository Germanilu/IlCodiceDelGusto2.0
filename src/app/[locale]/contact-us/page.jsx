'use client'
import {motion} from "framer-motion"
import { useTranslations }  from "next-intl";
import { Link } from '@/navigation';
import { useSelector }      from 'react-redux';
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ContactForm from "../components/contact/form";
import './page.scss'


// export const metadata = {
//   title: "IlCodiceDelGusto.com",
//   description: "Ti aiutiamo a creare il miglior sito web per il tuo ristorante ",
//   keywords: "realizzazione siti web,siti web per ristoranti, siti ristoranti, sito web per ristorante, ristorante sito web",
// }

export default function ContactUs(){
  const t = useTranslations("Contact-us");
  const isMobile = useSelector(state => state.responsive.isMobile);

  return (
    <div className="contact-us-design">
      <h1 className="title">{t('title')}</h1>
      {
        isMobile ? 
        <div className="mobile-container-image">
          <div className="container-image"></div>
          <div className="contact-container">
              <ContactForm/>
          </div>
        </div>

        :

        <div className="container-image">
          <motion.div className="contact-container"
           variants={{
            hidden:{opacity:0, y:100},
            visible:{opacity:1,y:0},
          }}
          transition={{delay: 0.5, duration:0.5}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          >
            <ContactForm/>
          </motion.div>
        </div>

      }
      <div className="container-text">
        <div className="profile-data">
          <h2 className="name">{t('name')}</h2>
          <h3 className="profession">{t('profession')}</h3>
          <p className="desc">{t('desc')}</p>
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
        <div className="socials">
            <div className="social"><Link target="_blank" href='https://www.linkedin.com/in/luciano-germani/'> <FaLinkedin size={25}/></Link></div>
            <div className="social"><Link target="_blank" href='https://www.instagram.com/ilcodicedelgusto/'> <FaInstagram size={25}/></Link></div>
            <div className="social"><Link target="_blank" href='https://www.facebook.com/profile.php?id=61567616643088'> <FaFacebook size={25}/></Link></div>
            <div className="social"><Link target="_blank" href='https://x.com/CodiceDelGusto'> <FaSquareXTwitter size={25}/></Link></div>
          </div>
      </div>
    </div>
  ) 
}