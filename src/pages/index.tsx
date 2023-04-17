import { Layout } from "@/components/Layout";
import { List, ListItem } from "@/components/List";
import { Text } from "@/components/Text";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col space-y-12">
        <div className="mx-auto flex items-center space-x-10">
          <Image
            src="/assets/70781900.jpeg"
            alt="profile image"
            width={144}
            height={144}
            className="rounded-full"
          />
          <div className="flex flex-col space-y-4">
            <Text color="white" size="xlarge" tag="h1">
              Shunya Hayashi
            </Text>
            <Text size="small" tag="h2">
              software developer <br /> hhkb lover
            </Text>
          </div>
        </div>
        <div className="flex w-2/3 justify-between">
          <div className="flex flex-col space-y-2">
            <Text size="large" tag="h2" color="white">
              Interests
            </Text>
            <List className="ml-3.5">
              <ListItem>Typescript</ListItem>
              <ListItem>Golang</ListItem>
              <ListItem>GraphQL</ListItem>
            </List>
          </div>
          <nav className="flex flex-col space-y-2">
            <Text size="large" tag="h2" color="white">
              SNS
            </Text>
            <List className="ml-3.5">
              <ListItem url="https://github.com/devshun">Github</ListItem>
              <ListItem url="https://zenn.dev/dev_shun">Zenn</ListItem>
              <ListItem url="https://qiita.com/dev_shun">Qiita</ListItem>
            </List>
          </nav>
        </div>
      </div>
    </Layout>
  );
}
