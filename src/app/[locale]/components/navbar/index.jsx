'use client'

import {Link}               from '../../../../navigation';
import  LanguageSwitcher    from '../language-switcher';
import { useTranslations }  from "next-intl";
import { useSelector }      from 'react-redux';
import { useState }         from 'react';
import { IoMenu }           from "react-icons/io5";
import { RxCross2 }         from "react-icons/rx";

import './index.scss';

export default function Navbar() {
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
                    <Link className="item" href="/">{t('home')}</Link>
                  </li>
                  <li className="list-item">
                    <Link className="item" href="/about" >{t('about-us')}</Link>
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
            <ul className="navbar-list">
              <li className="list-item">
                <Link className="item" href="/">{t('home')}</Link>
              </li>
              <li className="list-item">
                <Link className="item" href="/about" >{t('about-us')}</Link>
              </li>
              <li className="list-item">
                <Link className="item" href="/blog">{t('blog')}</Link>
              </li>
              <li className="list-item">
                <Link className="item" href="/contact-us">{t('contact-us')}</Link>
              </li>
              <LanguageSwitcher />
            </ul>
          </nav>
      }
    </>
  )
}