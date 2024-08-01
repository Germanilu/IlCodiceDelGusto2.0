
'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import { articlesIt } from '@/static/blog/it/articlesIt';
import { articlesEs } from '@/static/blog/es/articlesEs';
import { articlesEn } from '@/static/blog/en/articlesEn';
import {Link}       from '@/navigation';
import './page.scss';


/**
 * @component Blog
 * 
 * @returns Map the articles and return each one with title, description and link 
 */
const Blog = ({params}) => {


  useEffect(() => {
    // Add the class to the body element
    document.body.classList.add('blog-page');

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('blog-page');
    };
  }, []); // D

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
      <h2 className='blog-title'>Blog</h2>
      <div className="articles-container">
        {articles.map((article) => (
          <Link className='article-link' key={article.id} href={`/blog/${article.slug}`}>
            <div key={article.id} className="article-container">
              <div className="img-container">
                <Image className="img" src={article.img} alt={article.title} width={320} height={180}  objectFit="cover" quality={100}  />
              </div>
              <h3 className='article-title'>{article.title}</h3>
              <p className='article-text'>{article.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
