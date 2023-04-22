import { Card } from "@/components/Card";
import { Tab, Tabs } from "@/components/Tabs";
import { Text } from "@/components/Text";
import { REVALIDATE_INTERVAL } from "@/constants/revalidateInterval";
import { client } from "@/graphql/client";
import {
  GetArticlesDocument,
  GetArticlesQuery,
} from "@/graphql/generated/graphql";
import {
  formatZennArticle,
  formatQiitaArticle,
} from "@/lib/converters/formatArticles";
import { sortArticlesByPublishedAt } from "@/lib/sortArticlesByPublishedAt";
import { Article } from "@/types/article";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const ArticlesPage: NextPage<{
  profiles: GetArticlesQuery["profiles"];
  articles: Array<Article>;
}> = ({ profiles, articles }) => {
  const [profile] = profiles;

  return (
    <div className="flex flex-col space-y-12">
      <div className="mx-auto flex items-center space-x-10">
        <Image
          src={profile.image?.url as string}
          alt="profile image"
          width={135}
          height={135}
          className="rounded-full"
        />
        <div className="flex flex-col space-y-4">
          <Text color="white" size="xlarge" tag="h1">
            {profile.firstName} {profile.lastName}
          </Text>
        </div>
      </div>
      <Tabs className="mx-auto">
        <Tab url="/">Profile</Tab>
        <Tab url="/articles">Articles</Tab>
        {/* <Tab url="/books">Books</Tab> */}
        <Tab url="/packages">Packages</Tab>
      </Tabs>
      <div className="min-h-[25rem] animate-float-up">
        <div className="grid w-[60rem] grid-cols-3">
          {articles.map(({ id, title, badge, publishedAt, url }) => (
            <Link key={id} href={url} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Card
                  title={title}
                  badge={badge as { label: string; color: "red" }}
                  publishedAt={publishedAt}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { zennArticles, qiitaArticles, ...rest },
  } = await client.query({
    query: GetArticlesDocument,
    variables: {
      zennUsername: process.env.ZENN_USER_NAME as string,
      qiitaUsername: process.env.QIITA_USER_NAME as string,
    },
  });

  return {
    props: {
      ...rest,
      articles: sortArticlesByPublishedAt([
        ...formatZennArticle(zennArticles.articles),
        ...formatQiitaArticle(qiitaArticles),
      ]),
    },
    revalidate: REVALIDATE_INTERVAL,
  };
};

export default ArticlesPage;
