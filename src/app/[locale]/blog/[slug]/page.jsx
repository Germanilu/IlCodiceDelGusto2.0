
import { notFound } from 'next/navigation';
import { articlesIt } from '@/static/blog/it/articlesIt';
import { articlesEs } from '@/static/blog/es/articlesEs';
import { articlesEn } from '@/static/blog/en/articlesEn';
import  ProgressBar from '@/app/[locale]/components/progress-bar';
import  Button from '@/app/[locale]/components/button';
import { unstable_setRequestLocale } from 'next-intl/server';
import ScrollToTop from "@/app/[locale]/components/scroll-to-top/index";
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

const getArticleById = (params) => {
  let article;
  if(params.locale == 'it'){
    article = articlesIt.find((article) => article.id === params.id);
   }
 if(params.locale == 'es'){
   article = articlesEs.find((article) => article.id === params.id);
 }
 if(params.locale == 'en'){
   article = articlesEn.find((article) => article.id === params.id);
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

/**
 * @method generateRandomId
 * Generate a random id that is equal or inferior to the length of the italian articles (taken as reference)
 * 
 * @returns Number
 */
const generateRandomId = (currentPostId) => {
  const generate = () => Math.floor(Math.random() * articlesIt.length) + 1;

  let randomId = generate();

  while (randomId === currentPostId) {
    randomId = generate();
  }

  return randomId;
}

/**
 * @method generateRandomeArticle
 * This function will generate a random id, different from the current article id, and will return the href of it.
 * 
 * @param {Object} params  shape: { locale: 'it', slug: 'net-promoter-score' }
 * @returns String href
 */
const generateRandomArticle = (params) => {
  const locale            = params.locale;

  const currentPostId     = getArticle(params).id;
  const randomId          = generateRandomId(currentPostId);

  const newArticleParams  = { locale: locale, id:randomId }
  const randomArticle     = getArticleById(newArticleParams)

  return randomArticle.slug
}

const BlogPost = ({ params }) => {


  unstable_setRequestLocale(params.locale);

  const article = getArticle(params)
  const articleHref = generateRandomArticle(params)
  console.log(article.text)
  return (
    <div className="post-container">
      <ProgressBar/>
      <div dangerouslySetInnerHTML={{ __html: article.text }} />
      <div className='buttons'>
        <Button href='/blog' text='back'/>
        <Button href={articleHref} text='next'/>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;