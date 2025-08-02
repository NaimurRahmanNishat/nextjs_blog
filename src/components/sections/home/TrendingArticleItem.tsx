import PostMeta from '@/components/ui/PostMeta';
import { IArticle } from '@/models/Article';
import Link from 'next/link';
import React from 'react'

interface TrendingArticleItemProps {
    article: IArticle;
    index: number;
}

const TrendingArticleItem = ({article, index}:TrendingArticleItemProps) => {
  return (
    <li className='flex items-start mb-6'>
        <div className='shrink-0 mr-4 text-3xl text-gray-300 font-semibold'>{`0${index + 1}`}</div>
        <div className='grow'>
            <h4 className='text-base font-bold mb-2 leading-tight'>
                <Link href={`/articles/${article._id}`} className='hover:text-primary text-[#2E2E2E] transition-colors duration-300'>{article.title}</Link>
            </h4>
            <PostMeta {...article.meta}/>
        </div>
    </li>
  )
}

export default TrendingArticleItem;