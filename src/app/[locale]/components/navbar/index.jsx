'use client'

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslations } from "next-intl";
import { Link } from '@/navigation';
import Image from 'next/image';
import { IoMdArrowDropdown, IoMdArrowDropup  } from 'react-icons/io';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import icon from "../../../../static/media/svg/icon.svg";
import LanguageSwitcher from '../language-switcher';
import Button from '../button';

import './index.scss';

const Navbar = () => {
  const t = useTranslations("Navbar");
  const t1 = useTranslations("Services");
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const isMobile = useSelector(state => state.responsive.isMobile);


  /**
   * @method closeMenu
   * Allows to close menu when clicked
   */
  const closeMenu = () => {
    setOpenMenu(!openMenu)
  }

  /**
   * @method closeMenu
   * Allows to close menu when clicked
   */
  const closeService = () => {
    setOpenServices(!openServices)
  }


  /**
   * @method renderService 
   * @returns Html with services
   */
  const renderService = () => {
    return (
      <div className={`${openServices ? "open" : ""} services-container`}>
        <div className="row">
          <div className="list-container">
            <div className="title">{t1('title1')}</div>
            <li className='list-item'>
              <Link className='item' onClick={closeService}  href="/contact-us">{t1('service1')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service2')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service3')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service4')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service5')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service6')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service7')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service8')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service9')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service10')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service11')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service12')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service13')}</Link>
            </li>
          </div>
        </div>
        <div className="row">
          <div className="list-container">
            <div className="title">{t1('title2')}</div>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service14')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service15')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service16')}</Link>
            </li>
          </div>
          <div className="list-container">
            <div className="title">{t1('title3')}</div>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service17')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service18')}</Link>
            </li>
          </div>
        </div>
        <div className="row">
          <div className="list-container">
            <div className="title">{t1('title4')}</div>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service19')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service20')}</Link>
            </li>
            <li className='list-item'>
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service21')}</Link>
            </li>
          </div>
        </div>
      </div>
    )
  }

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
          <nav className={`navbar mobile ${openMenu ? "open" : ""} ${scrolled ? 'scrolled' : ''}`}>
            <Link className="item" href="/">
              <Image className='logo' src={icon} height={100} />
            </Link>
            <div className='menu-action' >
              {openMenu ? <RxCross2 className='burger-menu-icon' size={25} onClick={closeMenu} /> : <IoMenu className='burger-menu-icon' size={25} onClick={closeMenu} />}
              {openMenu &&
                <ul className='mobile-navbar-box'>
                  <li className="list-item">
                    <Link className="item" href="/#what-we-offer" onClick={closeMenu} >{t('what-we-offer')}</Link>
                  </li>
                  <li className="list-item">
                    <Link className="item" href="/#projects" onClick={closeMenu}>{t('our-works')}</Link>
                  </li>
                  <li className="list-item">
                    <Link className="item" href="/#digital-menu" onClick={closeMenu}>{t('digital-menu')}</Link>
                  </li>
                  <li className="list-item">
                    <Link className="item" href="/#testimonials" onClick={closeMenu}>{t('testimonial')}</Link>
                  </li>
                  <li className="list-item">
                    <Link className="item" href="/blog" onClick={closeMenu}>{t('blog')}</Link>
                  </li>
                  {/* <li className="list-item">
                    <span className='item'>{t('services')}</span>
                    <IoMdArrowDropdown size={30} color='#FEFBF6' />
                  </li> */}
                  <li className="list-item" onClick={closeMenu}>
                    <Button text={'contact-us'} href={'/contact-us'}  />
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
                <Image className='icon' src={icon} />
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
                <div className="list-item" >
                  <div className='services' onClick={() => setOpenServices(!openServices) }>
                    <span className='item' >{t('services')}</span>
                    {
                      openServices ?
                      <IoMdArrowDropup  size={30} color='#FEFBF6'  />
                      :
                      <IoMdArrowDropdown size={30} color='#FEFBF6'  />
                    }
                  </div>
                  {renderService()}
                </div>
                <li className="list-item">
                  <Link className="item" href="/blog">{t('blog')}</Link>
                </li>
                <LanguageSwitcher />
              </ul>
              <Button text={'contact-us'} href={'/contact-us'} />
            </div>
          </nav>
      }
    </>
  )
}

export default Navbar