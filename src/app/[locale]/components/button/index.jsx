import {Link}               from '@/navigation';
import { useTranslations }  from "next-intl";
import './index.scss';

/**
 * @component Button
 * <Button text={'contact-us'} href={'/contact-us'}/>
 * 
 * @param {String} text 
 * @param {String} href 
 */
const Button = ({text, href}) => {
  const t     = useTranslations("Navbar");

  return (
    <Link href={href}>
      <div className="button-design">
        <span className="button-text"> {t(`${text}`)}</span>
        <div className="fill-container"></div>
      </div>
    </Link>
  )
}

export default Button; 
