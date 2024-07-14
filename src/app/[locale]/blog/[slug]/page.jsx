
import { notFound } from 'next/navigation';
import { articlesIt } from '@/static/blog/it/articlesIt';
import { articlesEs } from '@/static/blog/es/articlesEs';
import { articlesEn } from '@/static/blog/en/articlesEn';
import  ProgressBar from '@/app/[locale]/components/progress-bar';
import  Button from '@/app/[locale]/components/button';
import { unstable_setRequestLocale } from 'next-intl/server';
import './page.scss';


/**
 * @method getArticle
 * Retrieve correct article depending on current language
 * @param {Object} params shape: {locale:'es', slug:'marketing-nella-ristorazione'}
 * @returns {Object} Article 
 */
const getArticle = (params) => {
  let article;
  if(params.locale == 'it'){
    article = articlesIt.find((article) => article.slug === params.slug);
   }
 if(params.locale == 'es'){
   article = articlesEs.find((article) => article.slug === params.slug);
 }
 if(params.locale == 'en'){
   article = articlesEn.find((article) => article.slug === params.slug);
 }
 if (!article) {
   notFound();
 }
 return article
}


/**
 * @method generateMetadata
 * generateMetadata generate metadata retrieving correct blog article
 * @param {Object} params shape: {locale:'es', slug:'marketing-nella-ristorazione'}
 * @returns Object metaData
 */
export async function generateMetadata({ params }) {

  const article = getArticle(params);
  return {
    title: article.title,
    description: article.metaDescription,
    keywords: article.metaKeywords,
  };
}

const BlogPost = ({ params }) => {

  unstable_setRequestLocale(params.locale);

  const article = getArticle(params)

  return (
    <div className="post-container">
      <ProgressBar/>
      <div dangerouslySetInnerHTML={{ __html: article.text }} />
      <Button href='/blog' text='back'/>
    </div>
  );
};

export default BlogPost;