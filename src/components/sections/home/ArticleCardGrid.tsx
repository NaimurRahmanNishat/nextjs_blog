import { Article } from '@/types/article';
import Link from 'next/link';
import Image from 'next/image';
import PostMeta from '@/components/ui/PostMeta';

interface ArticleCardGridProps {
    article: Article;
}

const ArticleCardGrid = ({article}:ArticleCardGridProps) => {
  return (
    <article className='flex flex-col sm:flex-row mb-6 items-start'>
        <figure className='shrink-0 w-full h-40 sm:w-5/12 sm:h-auto overflow-hidden rounded-lg mb-4 sm:mb-0 sm:mr-6'>
            <Link href={`/articles/${article._id}`} className='bolck w-full h-full aspect-square'>
                <Image src={article.image} alt={article.title} width={190} height={165} className='w-full h-full object-cover rounded-lg' loading='lazy'/>
            </Link>
        </figure>
        <div className='grow w-full sm:w-7/12'>
            <h5 className='text-lg font-bold mb-2 leading-tight'>
                <Link href={`/articles/${article._id}`} className='hover:text-primary text-[#2E2E2E] transition-colors duration-300'>{article.title}</Link>
            </h5>
            {
                article.excerpt && (
                    <div className='text-gray-500 text-sm mb-3'>
                        <p className='line-clamp-2'>{article.excerpt}</p>
                    </div>
                )
            }
            <PostMeta {...article.meta}/>
        </div>
    </article>
  )
}

export default ArticleCardGrid;