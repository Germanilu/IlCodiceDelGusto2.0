
import { Link } from '@/navigation';
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

import icon from "../../../../static/media/logotext.png";


import './index.scss';

export default function Footer() {

  const t = useTranslations(['Navbar']);
  const t1 = useTranslations(['Footer']);

  return (
    <div className="footer-container">
      <div className="footer-design">
        <div className="logo">
          <Image className='img' src={icon} />
          {/* <span className='website-name'>il Codice del Gusto</span> */}
        </div>
        <div className="menu">
          <li className="list-item">
            <Link className="item" href="/#what-we-offer" >{t('what-we-offer')}</Link>
          </li>
          <li className="list-item">
            <Link className="item" href="/#projects">{t('our-works')}</Link>
          </li>
          <li className="list-item">
            <Link className="item" href="/#digital-menu">{t('digital-menu')}</Link>
          </li>
          <li className="list-item">
            <Link className="item" href="/#testimonials">{t('testimonial')}</Link>
          </li>
          <li className="list-item">
            <Link className="item" href="/blog">{t('blog')}</Link>
          </li>
        </div>
        <div className="info">
          <div className="text">info@ilcodicedelgusto.com</div>
          <div className="text street">Via Chiaravagna 33, GE, Italia</div>
          <div className="text">+39 0109844413</div>
          <div className="text">P.Iva 07984320964</div>
        </div>
        <div className="socials">
            <div className="social"><Link target="_blank" href='https://www.linkedin.com/in/luciano-germani/'> <FaLinkedin size={30}/></Link></div>
            <div className="social"><Link target="_blank" href='https://www.instagram.com/ilcodicedelgusto/'> <FaInstagram size={30}/></Link></div>
            <div className="social"><Link target="_blank" href='https://www.facebook.com/profile.php?id=61567616643088'> <FaFacebook size={30}/></Link></div>
          </div>
      </div>
        <div className="policies">
          <li className="list-item">
            <Link className="item" href="/cookie-policy">{t1('cookie-policy')}</Link>
          </li>
          <li className="list-item">
            <Link className="item" href="/privacy-policy">{t1('privacy-policy')}</Link>
          </li>
        </div>
      <span className='reserved'><strong>© 2024.</strong> Il Codice del Gusto. <strong>{t1('rights')}</strong></span>
    </div>
  )
}



