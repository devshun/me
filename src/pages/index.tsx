import { Tab, Tabs } from "@/components/Tabs";
import { Text } from "@/components/Text";
import { client } from "@/graphql/client";
import {
  GetProfileDocument,
  GetProfileQuery,
} from "@/graphql/generated/graphql";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const ProfilePage: NextPage<GetProfileQuery> = ({ profiles }) => {
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
        <div className="flex w-2/3 flex-col justify-start space-y-10">
          <Text tag="h2">
            {profile.selfIntroduction?.split("\n").map((line, i) => (
              <Fragment key={`${line}_${i}`}>
                {line}
                <br />
              </Fragment>
            ))}
          </Text>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-2">
              <Text size="large" tag="h2" color="white">
                Interests
              </Text>
              <div className="flex space-x-2">
                {profile.interests.map((interest) => (
                  <Image
                    key={interest.id}
                    src={interest.url as string}
                    alt="interest image"
                    width={45}
                    height={45}
                  />
                ))}
              </div>
            </div>
            <nav className="flex flex-col space-y-2">
              <Text size="large" tag="h2" color="white">
                SNS
              </Text>
              <div className="flex space-x-2">
                {(
                  profile.sns as Array<{
                    url: string;
                    label: string;
                    imageUrl: string;
                  }>
                ).map((sns) => (
                  <Link
                    key={sns.imageUrl}
                    href={sns.url}
                    passHref
                    legacyBehavior
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      <Image
                        src={sns.imageUrl}
                        alt="sns image"
                        width={45}
                        height={45}
                        className="rounded-md bg-white"
                      />
                    </a>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GetProfileDocument,
  });

  return {
    props: data,
  };
};

export default ProfilePage;
