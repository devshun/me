import { Card } from "@/components/Card";
import { Tab, Tabs } from "@/components/Tabs";
import { Text } from "@/components/Text";
import { REVALIDATE_INTERVAL } from "@/constants/revalidateInterval";
import { client } from "@/graphql/client";
import {
  GetPackagesDocument,
  GetPackagesQuery,
} from "@/graphql/generated/graphql";
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
          width={100}
          height={100}
          className="rounded-full md:h-[8.5rem] md:w-[8.5rem]"
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
      <div className="animate-float-up md:min-h-[25rem]">
        <div className="grid max-h-96 flex-col gap-8 px-10 sm:grid-cols-2 md:grid-cols-3 md:px-0">
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
    revalidate: REVALIDATE_INTERVAL,
  };
};

export default PackagesPage;
