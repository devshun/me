import { Layout } from "@/components/Layout";
import { List, ListItem } from "@/components/List";
import { Text } from "@/components/Text";
import { client } from "@/graphql/client";
import {
  GetProfileDocument,
  GetProfileQuery,
} from "@/graphql/generated/graphql";
import Image from "next/image";
import { Fragment } from "react";

export default function Home({ profiles }: GetProfileQuery) {
  const [profile] = profiles;
  return (
    <Layout>
      <div className="flex flex-col space-y-12">
        <div className="mx-auto flex items-center space-x-10">
          <Image
            src={profile.image?.url as string}
            alt="profile image"
            width={144}
            height={144}
            className="rounded-full"
          />
          <div className="flex flex-col space-y-4">
            <Text color="white" size="xlarge" tag="h1">
              {profile.firstName} {profile.lastName}
            </Text>
            <Text size="small" tag="h2">
              {profile.selfIntroduction?.split("\n").map((line, i) => (
                <Fragment key={`${line}_${i}`}>
                  {line}
                  <br />
                </Fragment>
              ))}
            </Text>
          </div>
        </div>
        <div className="flex w-2/3 justify-between">
          <div className="flex flex-col space-y-2">
            <Text size="large" tag="h2" color="white">
              Interests
            </Text>
            <List className="ml-3.5">
              {profile.interests.map((interest, i) => (
                <ListItem key={`${interest}_${i}`}>{interest}</ListItem>
              ))}
            </List>
          </div>
          <nav className="flex flex-col space-y-2">
            <Text size="large" tag="h2" color="white">
              SNS
            </Text>
            <List className="ml-3.5">
              {(profile.sns as Array<{ label: string; url: string }>).map(
                ({ label, url }, i) => (
                  <ListItem key={`${label}_${i}`} url={url}>
                    {label}
                  </ListItem>
                )
              )}
            </List>
          </nav>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: GetProfileDocument,
  });

  return {
    props: data,
    
  };
};
