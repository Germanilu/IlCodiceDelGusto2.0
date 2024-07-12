
import { notFound } from 'next/navigation';
import { articles } from '@/static/articles';
import  ProgressBar from '@/app/[locale]/components/progress-bar';
import  Button from '@/app/[locale]/components/button/fancy-button';
import { unstable_setRequestLocale } from 'next-intl/server';
import './page.scss';

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}


/**
 * @method generateMetadata
 * generateMetadata generate metadata retrieving correct blog article
 * @param {Object} params shape: {locale:'es', slug:'marketing-nella-ristorazione'}
 * @returns Object metaData
 */
export async function generateMetadata({ params }) {
  const article = articles.find((article) => article.slug === params.slug);
  if (!article) {
    notFound();
  }
  return {
    title: article.title,
    description: article.metaDescription,
    keywords: article.metaKeywords,
  };
}

const BlogPost = ({ params }) => {
  unstable_setRequestLocale(params.locale);
  const article = articles.find((article) => article.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="post-container">
      <ProgressBar/>
      <div dangerouslySetInnerHTML={{ __html: article.text }} />
      <Button href='/blog'/>
    </div>
  );
};

export default BlogPost;