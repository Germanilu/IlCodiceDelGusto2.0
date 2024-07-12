import { useRouter,usePathname } from '@/navigation';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';
import { IoMdArrowDropdown } from 'react-icons/io';
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

  return (
    <div className="language-switcher-design">
      <div className="current-language" onClick={() => setIsOpen(!isOpen)}>
        <Image src={flags[locale]} alt={languages[locale]} />
        <IoMdArrowDropdown size={30} color='#FEFBF6' />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {Object.keys(flags).map((lang) => (
            lang !== locale && (
              <div key={lang} className="box" onClick={() => handleLocaleChange(lang)}>
                <Image src={flags[lang]} alt={languages[lang]} />
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
}
