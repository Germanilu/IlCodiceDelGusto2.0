import { useTranslations } from "next-intl";
import Image from 'next/image';
import qrCode from '../../../../static/media/svg/qr-code.svg';
import './index.scss';

const QrCode = () => {
  const t = useTranslations("Qr-code");

  return (
    <div className='qr-code-design'>
      <h2 className='title'>{t('title')}</h2>
      <div className="qr-code-container">
        <div className="image-container">
          <Image className='image' src={qrCode} alt={'qr-code'} />
        </div>
        <div className="text-container">
          <h2 className='container-title'>{t('subtitle')}</h2>
          <span className='text'>{t('text')}</span>
        </div>
      </div>
    </div>
  )
}
export default QrCode