import { useTranslations }  from "next-intl";
import { Link }             from '@/navigation';

import './index.css';

/**
 * @component Button
 * Just a simple button, if no href provide default to '/'
 * 
 * @example <Button href='/blog'/>
 * @param {String} href href link
 */
const Button = ({ href }) => {
  const t = useTranslations("Button");

  return (
    <div className="container">
      <Link href={`${href ? href : '/'}`}>
        <div className="button type--A">
          <div className="button__line"></div>
          <div className="button__line"></div>
          <span className="button__text">{t('back')}</span>
          <div className="button__drow1"></div>
          <div className="button__drow2"></div>
        </div>
      </Link>
    </div>
  )
}

export default Button;