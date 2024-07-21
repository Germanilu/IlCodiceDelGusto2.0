'use client'

import { useEffect, useState }  from 'react';
import { useSelector }      from 'react-redux';
import { useTranslations }  from "next-intl";
import {Link}               from '@/navigation';
import Image                from 'next/image';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMenu }           from "react-icons/io5";
import { RxCross2 }         from "react-icons/rx";
import icon                 from "../../../../static/media/svg/icon.svg";
import  LanguageSwitcher    from '../language-switcher';
import  Button       from '../button';

import './index.scss';

const Navbar = () => {
  const t                       = useTranslations("Navbar");
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useSelector(state => state.responsive.isMobile);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {
        isMobile ?
        <nav className={`navbar mobile ${openMenu ? "open":""}`}>
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
                    <span className='item'>{t('services')}</span>
                    <IoMdArrowDropdown size={30} color='#FEFBF6' />
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
          <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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
                    <span className='item'>{t('services')}</span>
                    <IoMdArrowDropdown size={30} color='#FEFBF6' />
              </li>
              <li className="list-item">
                <Link className="item" href="/blog">{t('blog')}</Link>
              </li>
              <LanguageSwitcher />
            </ul>
              <Button text={'contact-us'} href={'/contact-us'}/>
            </div>
          </nav>
      }
    </>
  )
}

export default Navbar