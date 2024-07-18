
import { useTranslations } from "next-intl";
import Image from 'next/image';
import './index.scss';

const Card = ({title,text,img}) => {
    const t = useTranslations("Cards");
return(
    <div className="card-design">
        <div className="background-overlay">
            <Image className="img" src={img} alt={title} layout="fill" objectFit="cover" quality={100}  />
            <div className="gradient-overlay"></div>
        </div>
        <div className="text-container">
            <h3 className="card-title">{t(`${title}`)}</h3>
            <span className="card-text">{t(`${text}`)}</span>
        </div>
    </div>
)
}

export default Card;