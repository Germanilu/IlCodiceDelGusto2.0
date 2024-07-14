
import { articlesIt } from '@/static/blog/it/articlesIt';
import { articlesEs } from '@/static/blog/es/articlesEs';
import { articlesEn } from '@/static/blog/en/articlesEn';
import {Link}       from '@/navigation';
import './page.scss';

export const metadata = {
  title:"Il Codice del Gusto Blog",
  description:"Il Codice del Gusto Blog"
}

/**
 * @component Blog
 * 
 * @returns Map the articles and return each one with title, description and link 
 */
const Blog = ({params}) => {

  let articles;
  switch (params.locale) {
    case 'it':
      articles = articlesIt;
      break;
    case 'es':
      articles = articlesEs;
      break;
    case 'en':
      articles = articlesEn;
      break;
    default:
      articles = [];
      break;
  }

  return (
    <div className="blog">
      <h2>Blog</h2>
      <div className="articles-container">
        {articles.map((article) => (
          <Link key={article.id} href={`/blog/${article.slug}`}>
            <div key={article.id} className="article-container">
              <h3>{article.title}</h3>
              <p>{article.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
