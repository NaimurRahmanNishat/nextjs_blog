import PostMeta from '@/components/ui/PostMeta';
import { Article } from '@/types/article';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface SwiperCardProps {
    article: Article
}

const SwiperCard = ({article}:SwiperCardProps) => {
  return (
    <div className='rounded-lg overflow-hidden flex flex-col justify-between items-center md:flex-row bg-[#FAFAFA]'>
        {/* left side content */}
      <div className=" p-6 md:p-8 lg:p-10 flex flex-col justify-center w-full md:w-1/2 ">
        {article.caption && (
          <div className="text-xs uppercase text-gray-500  mb-2 font-semibold tracking-wide">
            {article.caption}
          </div>
        )}
        <h2 className="text-xl sm:text-2xl hover:text-primary font-bold mb-3 leading-tight">
          <Link href={`/articles/${article._id}`}>
            {article.title}
          </Link>
        </h2>
        {article.excerpt && (
          <div className="text-[#0000008a] mb-4 text-base leading-relaxed">
            <p>{article.excerpt}</p>
          </div>
        )}
        <PostMeta {...article.meta} />
      </div>
        {/* right side image */}
        <div className="w-full md:w-1/2 h-48 md:h-auto relative">
            <Image src={article.image} alt={article.title} width={700} height={400} className='w-full h-auto object-cover rounded-lg' loading='lazy'/>
        </div>
    </div>
  )
}

export default SwiperCard;