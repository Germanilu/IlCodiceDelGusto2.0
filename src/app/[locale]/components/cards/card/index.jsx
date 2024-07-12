
import { useTranslations } from "next-intl";
import Image from 'next/image';
import './index.scss';

const Card = ({title,text,img}) => {
    const t = useTranslations("Cards");
return(
    <div className="card-design">
        <Image src={img} alt={title}/>
        <h3 className="card-title">{t(`${title}`)}</h3>
        <span className="card-text">{t(`${text}`)}</span>
    </div>
)
}

export default Card;