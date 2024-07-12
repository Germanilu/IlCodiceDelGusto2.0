import { useTranslations }  from "next-intl";
import './index.scss';

const Button = () => {
  const t     = useTranslations("Navbar");

  return (
    <div className="button-design">
      <span class="button-text"> {t('contact-us')}</span>
      <div class="fill-container"></div>
    </div>
  )
}

export default Button; 
