import { useTranslations } from "next-intl";
import Button from '@/app/[locale]/components/button'
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
      <div className="hero-call-to-action">
        <Button text={'start-new-project'} href={'#contact'}/>
      </div>
    </div>
  );
}

export default Hero;
