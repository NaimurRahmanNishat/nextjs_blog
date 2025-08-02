import PostMeta from '@/components/ui/PostMeta';
import { IArticle } from '@/models/Article';
import Link from 'next/link';
import Image from 'next/image';
import ArticleExcerpt from '@/components/ui/ArticleExcerpt';

interface ArticleCardMostRecentProps {
    article: IArticle;
}

const ArticleCardMostRecent = ({article}:ArticleCardMostRecentProps) => {
  return (
    <article className="flex flex-col md:flex-row-reverse items-center md: mb-8 border-b border-gray-100 pb-8 last:border-b-0 last:pb-0"> 
      {/* image column */}
      <figure className="flex-shrink-0 w-full sm:w-3/12 h-40 sm:h-auto overflow-hidden rounded-lg mb-4 md:mb-0 md:ml-6">
        <Link href={`/articles/${article._id}`} className="block w-full h-full aspect-square">
          <Image
            src={article.image}
            alt={article.title}
            width={250} 
            height={180} 
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </Link>
      </figure>
      {/* content column */}
      <div className="flex-grow w-full sm:w-9/12">
      {
        article.caption && (
          <div className="text-gray-500 uppercase mb-2 font-semibold tracking-wide text-xs">{article.caption}</div>
        )
      }
        <h3 className="text-xl font-bold mb-3 leading-tight">
          <Link href={`/articles/${article._id}`} className="hover:text-primary transition-colors">
            {article.title}
          </Link>
        </h3>
        {article.excerpt && (
          <div className="text-[#0000008a] text-base reading-relaxed mb-4">
            <ArticleExcerpt excerpt={article.excerpt} />
          </div>
        )}
        <PostMeta {...article.meta} />
      </div>
    </article>
  )
}

export default ArticleCardMostRecent;