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
    <div class="container">
      <Link href={`${href ? href : '/'}`}>
        <div class="button type--A">
          <div class="button__line"></div>
          <div class="button__line"></div>
          <span class="button__text">{t('back')}</span>
          <div class="button__drow1"></div>
          <div class="button__drow2"></div>
        </div>
      </Link>
    </div>
  )
}

export default Button;