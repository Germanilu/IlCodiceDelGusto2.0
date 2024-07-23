import { notFound } from 'next/navigation';
import {policy} from '@/static/policy/index'
import { useLocale }                         from "next-intl";
import './index.scss';

const getPolicieByLang = (lang) => {

    const policyLang = policy.find((policy) => policy.lang == lang)

    if (!policyLang){
        notFound();
    }
    return policyLang
}
const privacypolicy = () => {
    const locale = useLocale();
    const html = getPolicieByLang(locale)

    return (
        <div className='policy-design'>
            <div dangerouslySetInnerHTML={{ __html: html.text }} />
        </div>
    )
}

export default privacypolicy