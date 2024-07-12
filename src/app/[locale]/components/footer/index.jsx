
import { Link } from '@/navigation';
import { useTranslations } from "next-intl";
import Image from 'next/image';
import icon from "../../../../static/media/svg/icon.svg";
import ig from "../../../../static/media/svg/ig.svg";
import linkedin from "../../../../static/media/svg/linkedin.svg";

import './index.scss';

export default function Footer() {

  const t = useTranslations(['Navbar']);
  const t1 = useTranslations(['Footer']);

  return (
    <div className="footer-container">
      <div className="footer-design">
        <div className="logo">
          <Image src={icon} />
          <div className="socials">
            <div className="social"><Link className="social1" target="_blank" href='https://www.instagram.com/ilcodicedelgusto/'> <Image className="social2" src={ig} /></Link></div>
            <div className="social"><Link target="_blank" href='https://www.linkedin.com/in/luciano-germani/'> <Image src={linkedin} /></Link></div>
          </div>
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
          <div className="text">Via Chiaravagna 33, GE, Italia</div>
          <div className="text">+39 333 333 333</div>
          <div className="text">P.Iva 1234566789</div>
        </div>
        <div className="policies">
          <li className="list-item">
            <Link className="item" href="/blog">{t1('privacy-policy')}</Link>
          </li>
          <li className="list-item">
            <Link className="item" href="/blog">{t1('cookie-policy')}</Link>
          </li>
        </div>
      </div>
      <span className='reserved'><strong>© 2024.</strong> Il Codice del Gusto. <strong>{t1('rights')}</strong></span>
    </div>
  )
}



