import { useTranslations } from "next-intl";
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
    </div>
  );
}

export default Hero;
