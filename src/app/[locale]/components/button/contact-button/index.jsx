import { useTranslations }  from "next-intl";
import './index.scss';

const Button = () => {
  const t     = useTranslations("Navbar");

  return (
    <div className="button-design">
      <span className="button-text"> {t('contact-us')}</span>
      <div className="fill-container"></div>
    </div>
  )
}

export default Button; 
