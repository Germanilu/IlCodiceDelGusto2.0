import { useTranslations } from "next-intl";
import Image from 'next/image';
import hero from '@/static/media/svg/hero.svg';
import './index.scss';

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className='hero-design'>
      <div className="text">
        <span className="slogan">{t('slogan')}</span>
        <h1 className="title">{t('title')}</h1>
        <span className="website-name">{t('website-name')}</span>
      </div>
        <Image className="hero-img" src={hero} alt="il codice del gusto hero image"  />
    </div>
  );
}

export default Hero;
