export const sortArticlesByPublishedAt = (
  articles: Array<{
    publishedAt: string;
  }>,
  order: "asc" | "desc" = "desc"
) => {
  return articles.sort((a, b) => {
    const aDate = new Date(a.publishedAt);
    const bDate = new Date(b.publishedAt);
    return order === "desc"
      ? bDate.getTime() - aDate.getTime()
      : aDate.getTime() - bDate.getTime();
  });
};
