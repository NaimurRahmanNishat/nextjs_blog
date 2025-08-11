import { Article } from "@/types/article";
import { Comment } from "@/types/comments";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  // FaFacebook,
  // FaHeart,
  // FaShare,
  FaStar,
//   FaTwitter,
} from "react-icons/fa";

interface IArticle extends Article {
  authorImageUrl: string;
  createdAt: string;
  comments: Comment[];
}

async function getArticle(id: string): Promise<IArticle | null> {
  try {
    const apiUrl = `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/articles/${id}`;
    const res = await fetch(apiUrl, { next: { revalidate: 10 } });
    if (!res.ok) {
      return null;
    }

    const articleData = await res.json();
    return {
      ...articleData,
      imageUrl:
        articleData.imageUrl ||
        "https://placehold.co/1240x700/e2e8f0/4a5568?text=Featured+Image",
      authorImageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
      comments: articleData.comments,
    };
  } catch (error) {
    console.error("Error fetching article", error);
    return null;
  }
}

const ArticleDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const article = await getArticle(id);

  if (!article) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">404</h1>
          <p className="text-xl text-gray-600">Article Not Found!</p>
        </div>
      </div>
    );
  }

  return (
    <section className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* article header */}
      <div className="pt-12 pb-8">
        <div className="mb-5 text-left">
          <h1 className="text-4xl font-lora font-bold mb-6">{article.title}</h1>
          <div className="flex justify-start items-center space-x-2 text-gray-500">
            <Image
              src={
                article?.authorImageUrl ||
                "https://randomuser.me/api/portraits/men/4.jpg"
              }
              width={24}
              height={24}
              alt="author avatar"
              className="w-12 h-12 rounded-full "
            />
            <Link href="#" className="hover:underline">
              {article.meta.author || "Unknown"}
            </Link>
            <span>in</span>
            <Link href="#" className="hover:underline capitalize text-primary">
              {article.meta.category}
            </Link>
          </div>
          <div className="text-gray-500 text-sm mt-2">
            <span>
              {new Date(article.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="mx-2">&middot;</span>
            <span title="5 min read">
              {" "}
              {article.meta?.readingTime || 5} min read
            </span>
            <Link href="#">
              <FaStar className="inline-block ml-2 text-yellow-500" />
              <span className="ml-1">5.0</span>
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ArticleDetailsPage;
