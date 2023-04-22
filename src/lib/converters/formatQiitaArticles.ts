import { GetArticlesQuery } from "@/graphql/generated/graphql";
import { Article } from "@/types/article";

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
