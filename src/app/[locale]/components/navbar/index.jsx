'use client'

import { useEffect, useState } from 'react';
import { animate,motion } from "framer-motion"
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
            <motion.div className="title"
             variants={{
              hidden:{opacity:0, x:25},
              visible:{opacity:1,x:0},
            }}
            transition={{delay: 0.01, duration:0.5}}
            initial="hidden"
            whileInView="visible"
            >{t1('title1')}</motion.div>
            <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.05, duration:0.5}}
            initial="hidden"
            whileInView="visible">
              <Link className='item' onClick={closeService}  href="/contact-us">{t1('service1')}</Link>
            </motion.li>
            <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.1, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service2')}</Link>
            </motion.li>
            <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.15, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service3')}</Link>
            </motion.li>
            <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.2, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service4')}</Link>
            </motion.li>
             <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.25, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service5')}</Link>
            </motion.li>
             <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.3, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service6')}</Link>
            </motion.li>
             <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.35, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service7')}</Link>
            </motion.li>
             <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.4, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service8')}</Link>
            </motion.li>
             <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.45, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service9')}</Link>
            </motion.li>
             <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.5, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service10')}</Link>
            </motion.li>
             <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.55, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service11')}</Link>
            </motion.li>
            <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.6, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service12')}</Link>
            </motion.li>
            <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.65, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service13')}</Link>
            </motion.li>
          </div>
        </div>
        <div className="row">
          <div className="list-container">
            <motion.div className="title"
            variants={{
              hidden:{opacity:0, x:25},
              visible:{opacity:1,x:0},
            }}
            transition={{delay: 0.68, duration:0.5}}
            initial="hidden"
            whileInView="visible"
            >{t1('title2')}</motion.div>
            <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.7, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service14')}</Link>
            </motion.li>
            <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.75, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service15')}</Link>
            </motion.li>
            <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.8, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service16')}</Link>
            </motion.li>
          </div>
          <div className="list-container">
          <motion.div className="title"
            variants={{
              hidden:{opacity:0, x:25},
              visible:{opacity:1,x:0},
            }}
            transition={{delay: 0.84, duration:0.5}}
            initial="hidden"
            whileInView="visible"
            >{t1('title3')}</motion.div>
            <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.85, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service17')}</Link>
            </motion.li>
            <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.9, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service18')}</Link>
            </motion.li>
          </div>
        </div>
        <div className="row">
          <div className="list-container">
          <motion.div className="title"
            variants={{
              hidden:{opacity:0, x:25},
              visible:{opacity:1,x:0},
            }}
            transition={{delay: 0.94, duration:0.5}}
            initial="hidden"
            whileInView="visible"
            >{t1('title4')}</motion.div>
            <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 0.95, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service19')}</Link>
            </motion.li>
            <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 1, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service20')}</Link>
            </motion.li>
            <motion.li className='list-item'
            variants={{
              hidden:{opacity:0, y:25},
              visible:{opacity:1,y:0},
            }}
            transition={{delay: 1.05, duration:0.5}}
            initial="hidden"
            whileInView="visible">
            <Link className='item' onClick={closeService}  href="/contact-us">{t1('service21')}</Link>
            </motion.li>
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    animate(".arrow", { rotate: openServices ? 180 : 0 }, { duration: 0.2 });


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

  }, [openServices]);

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
              <motion.div
              variants={{
                hidden:{opacity:0, y:25},
                visible:{opacity:1,y:0},
              }}
              transition={{delay: .1, duration:0.5}}
              initial="hidden"
              whileInView="visible"
              >
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
                </motion.div>
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
                    <IoMdArrowDropdown className='arrow'  size={30} color='#FEFBF6'  />

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