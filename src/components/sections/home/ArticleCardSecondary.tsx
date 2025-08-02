import { IArticle } from '@/models/Article';
import Link from 'next/link';
import Image from 'next/image';
import PostMeta from '@/components/ui/PostMeta';

interface ArticleCardSecondaryProps {
    article: IArticle
}

const ArticleCardSecondary = ({article}:ArticleCardSecondaryProps) => {
  return (
    <article className='flex mb-6 first:mt-0 mt-6 md:mt-0'>
        <figure className='shrink-0 w-28 sm:w-32 sm:h-28 h-24 md:w-36 md:h-32 mr-4'>
            <Link href={`/articles/${article._id}`} className='bolck w-full h-full'>
                <Image src={article.image} alt={article.title} width={190} height={165} className='w-full h-auto object-cover rounded-lg' loading='lazy'/>
            </Link>
        </figure>
        <div className='grow'>
            {
                article.caption && (<p className='text-gray-500 uppercase mb-1 text-xs'>{article.caption}</p>)
            }
            <h5 className='text-base font-bold mb-2 leading-tight'>
                <Link href={`/articles/${article._id}`} className='hover:text-primary text-[#2E2E2E] transition-colors duration-300'>{article.title}</Link>
            </h5>
            <PostMeta {...article.meta}/>
        </div>
    </article>
  )
}

export default ArticleCardSecondary;