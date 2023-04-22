import { Card } from "@/components/Card";
import { Tab, Tabs } from "@/components/Tabs";
import { Text } from "@/components/Text";
import { client } from "@/graphql/client";
import {
  GetArticlesQuery,
  GetPackagesDocument,
  GetPackagesQuery,
} from "@/graphql/generated/graphql";
import { Article } from "@/types/article";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const PackagesPage: NextPage<GetPackagesQuery> = ({ profiles, packages }) => {
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
          {packages.map(({ id, name, kind, url }) => (
            <Link key={id} href={url as string} passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Card
                  title={name as string}
                  badge={{ label: kind as string }}
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
  const { data } = await client.query({
    query: GetPackagesDocument,
  });

  return {
    props: data,
  };
};

export default PackagesPage;
