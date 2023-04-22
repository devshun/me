import { GetArticlesQuery } from "@/graphql/generated/graphql";
import { Article } from "@/types/article";

export const formatZennArticle = (
  articles: GetArticlesQuery["zennArticles"]["articles"]
): Array<Article> => {
  return articles.map(({ slug, published_at, ...rest }) => ({
    ...rest,
    url: `https://zenn.dev/dev_shun/articles/${slug}`,
    badge: {
      label: "Zenn",
      color: "blue",
    },
    publishedAt: published_at,
  }));
};
