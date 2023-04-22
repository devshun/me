import { GetArticlesQuery } from "@/graphql/generated/graphql";
import { Article } from "@/types/article";

export const formatZennArticle = (
  articles: GetArticlesQuery["zennArticles"]["articles"]
): Array<Article> => {
  return articles.map(({ slug, published_at, user: { name }, ...rest }) => ({
    ...rest,
    url: `https://zenn.dev/${name}/articles/${slug}`,
    badge: {
      label: "Zenn",
      color: "blue",
    },
    publishedAt: published_at,
  }));
};

export const formatQiitaArticle = (
  articles: GetArticlesQuery["qiitaArticles"]
): Array<Article> => {
  return articles.map(({ created_at, ...rest }) => ({
    ...rest,
    badge: {
      label: "Qiita",
      color: "green",
    },
    publishedAt: created_at,
  }));
};
