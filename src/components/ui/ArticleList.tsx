"use client";
import { IArticle } from "@/models/Article";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Loader from "./Loader";

const ArticleList = ({ initialArticles }: { initialArticles: IArticle[] }) => {
  const [articles, setArticles] = useState(initialArticles);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: '100px'
  });

  useEffect(() => {
    const loadMoreArticles = async () => {
      if (isLoading || !hasMore) return;
      setIsLoading(true);
      try {
        const response = await fetch(`/api/articles?page=${page}&limit=8`);
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const { articles: newArticles, totalPages, currentPage } = await response.json();
        
        // Check if we have new articles
        if (newArticles && newArticles.length > 0) {
          setArticles((prev) => [...prev, ...newArticles]);
          setPage((prev) => prev + 1);
        } else {
          // No more articles available
          setHasMore(false);
        }
        
        // Check if we've reached the last page
        if (currentPage >= totalPages || newArticles.length < 8) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Failed to load more articles", error);
        // On error, stop trying to load more
        setHasMore(false);
      } finally {
        setIsLoading(false);
      }
    };
    if (inView && hasMore && !isLoading) {
      loadMoreArticles();
    }
  }, [inView, hasMore, isLoading, page]);

  return (
    <>
      <div className="grid md:grid-cols-4 gap-10">
        {articles.map((article: IArticle, index: number) => (
          <Link
            key={index} // Use _id as key for better performance
            href={`/articles/${article._id}`}
            className="block h-80"
          >
            <div className="group bg-white shadow-md hover:shadow-lg transition rounded-xl overflow-hidden h-full">
              {article.image && (
                <div className="relative aspect-video w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span>{article.meta?.category}</span>
                  <span>•</span>
                  <span>{article.meta?.date}</span>
                </div>
                <h2 className="text-base line-clamp-2 font-semibold text-gray-900 group-hover:text-primary">
                  {article.title}
                </h2>
                <div className="mt-4 text-sm text-gray-500">
                  By <span className="font-medium">{article.meta?.author}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Show loader only when loading */}
      {isLoading && <Loader />}
      
      {/* Show "No more articles" message when all articles are loaded */}
      {!hasMore && !isLoading && articles.length > 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No more articles to load</p>
        </div>
      )}
      
      {/* Invisible trigger for infinite scroll - only show when there are more articles */}
      {!isLoading && hasMore && <div ref={ref} className="h-10" />}
    </>
  );
};

export default ArticleList;