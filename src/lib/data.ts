import ArticleModel, { IArticle } from "@/models/Article";
import { connectDB } from "./mongodb";
import { separateArticlesBySection } from "./articleUtils";

export type SeparatedArticles = {
    editorPicksPrimary?: IArticle;
    editorPicksSecondary: IArticle[];
    trendingArticles: IArticle[];
    sliderArticles: IArticle[];
    gridArticles: IArticle[];
    mostRecentArticles: IArticle[];
    allMostRecentGridArticles: IArticle[];
    popularArticles: IArticle[];
}

interface HomePageData {
    articles: SeparatedArticles;
}

export async function getHomePageData(): Promise<HomePageData> {
    let allFetchedArticles: IArticle[] = [];
    try {
        await connectDB();
        const articles = await ArticleModel.find({}).sort({ createdAt: -1 }).lean();
        allFetchedArticles = JSON.parse(JSON.stringify(articles));
    } catch (error) {
        console.error("Error fetching articles:", error);
    }
    const separatedArticles = separateArticlesBySection(allFetchedArticles);
    return { articles: separatedArticles };
}