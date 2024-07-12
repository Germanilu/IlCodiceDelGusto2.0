'use client'

import {Link}               from '@/navigation';
import  LanguageSwitcher    from '../language-switcher';
import  ContactButton       from '../button/contact-button';
import { useTranslations }  from "next-intl";
import Image                from 'next/image';
import { useSelector }      from 'react-redux';
import { useState }         from 'react';
import { IoMenu }           from "react-icons/io5";
import { RxCross2 }         from "react-icons/rx";
import icon                 from "../../../../static/media/svg/icon.svg";

import './index.scss';

const Navbar = () => {
  const t                       = useTranslations("Navbar");
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useSelector(state => state.responsive.isMobile);

  return (
    <>
      {
        isMobile ?
          <nav className="navbar">
            <div className='menu-action' onClick={() => setOpenMenu(!openMenu)}>
              {openMenu ? <RxCross2 className='burger-menu-icon' /> : <IoMenu className='burger-menu-icon' />}
              {openMenu &&
                <ul className='mobile-navbar-box'>
                  <li className="list-item">
                    <Link className="item" href="/">
                      <Image src={icon}/>
                    </Link>
                  </li>
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
                  <li className="list-item">
                    <Link className="item" href="/contact-us">{t('contact-us')}</Link>
                  </li>
                  <li className="list-item">
                    <LanguageSwitcher className="language-switcher" />
                  </li>
                </ul>
              }
            </div>
          </nav>
          :
          <nav className="navbar">
            <div className="navbar-container">
            <Link className="logo" href="/">
              <Image className='icon' src={icon}/>
            </Link>
            <ul className="navbar-list">
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
              <LanguageSwitcher />
            </ul>
            <Link className="item" href="/contact-us"><ContactButton/></Link>
              </div>
          </nav>
      }
    </>
  )
}

export default Navbar