import { IArticle } from "@/models/Article";
import { SeparatedArticles } from "./data";

export function separateArticlesBySection(allArticles: IArticle[]) {
    const separated: SeparatedArticles = {
        editorPicksPrimary: {} as IArticle,
        editorPicksSecondary: [],
        sliderArticles: [],
        mostRecentArticles: [],
        allMostRecentGridArticles: [],
        trendingArticles: [],
        gridArticles: [],
        popularArticles: [],
    }
  // Find the single primary editor pick
    separated.editorPicksPrimary = allArticles.find((article) => article.meta.displaySection === 'editorPickPrimary');

    // Find the secondary editor picks
    separated.editorPicksSecondary = allArticles.filter((article) => article.meta.displaySection === 'editorPickSecondary');

    // Find the slider articles
    separated.sliderArticles = allArticles.filter((article) => article.meta.displaySection === 'slider');

    // Find the most recent articles
    separated.mostRecentArticles = allArticles.filter((article) => article.meta.displaySection === 'mostRecent');

    // Find the most recent grid articles
    separated.allMostRecentGridArticles = allArticles.filter((article) => article.meta.displaySection === 'mostRecentGrid');

    // Find the trending articles
    separated.trendingArticles = allArticles.filter((article) => article.meta.displaySection === 'trending');

    // Find the grid articles
    separated.gridArticles = allArticles.filter((article) => article.meta.displaySection === 'gridAndAds');

    // Find the populer articles
    separated.popularArticles = separated.trendingArticles;

    return separated;
};