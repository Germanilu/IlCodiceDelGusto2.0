

import { useRouter,usePathname } from '@/navigation';
import { animate, motion } from "framer-motion"
import { useLocale } from 'next-intl';
import { useEffect,useState } from 'react';
import Image from 'next/image';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import en from '@/static/media/svg/en.svg';
import it from '@/static/media/svg/it.svg';
import es from '@/static/media/svg/es.svg';
import './index.scss';

const flags = {
  en: en,
  it: it,
  es: es,
};

const languages = {
  en: 'English',
  it: 'Italian',
  es: 'Spanish',
};

export default function LanguageSwitcher() {

  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale) => {
    setIsOpen(false);
    router.replace(pathname, { locale: newLocale });
  };

  useEffect(() => {
    animate(".arrow1", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

  },[isOpen])

  return (
    <div className="language-switcher-design">
      <div className="current-language" onClick={() => setIsOpen(!isOpen)}>
        <Image src={flags[locale]} alt={languages[locale]} />
        <IoMdArrowDropdown className='arrow1' size={30} color='#FEFBF6' />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {Object.keys(flags).map((lang) => (
            lang !== locale && (
              <motion.div
              variants={{
                hidden:{opacity:0, y:25},
                visible:{opacity:1,y:0},
              }}
              transition={{delay: 0.2, duration:0.5}}
              initial="hidden"
              whileInView="visible"
               key={lang} className="box" onClick={() => handleLocaleChange(lang)}>
                <Image src={flags[lang]} alt={languages[lang]} />
              </motion.div>
            )
          ))}
        </div>
      )}
    </div>
  );
}
