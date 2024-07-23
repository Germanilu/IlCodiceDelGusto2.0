import { notFound } from 'next/navigation';
import {cookie} from '@/static/cookie/index'
import { useLocale }                         from "next-intl";
import './index.scss';

const getCookieByLang = (lang) => {

    const cookieLang = cookie.find((cookie) => cookie.lang == lang)

    if (!cookieLang){
        notFound();
    }
    return cookieLang
}

const cookiePolicy = () => {
    const locale = useLocale();
    const html = getCookieByLang(locale)

    return (
        <div className='cookie-design'>
            <div dangerouslySetInnerHTML={{ __html: html.text }} />
        </div>
    )
}

export default cookiePolicy