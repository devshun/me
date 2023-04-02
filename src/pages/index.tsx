import { Layout } from "@/components/Layout";
import { Text } from "@/components/Text";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col space-y-12">
        <div className="mx-auto flex items-center space-x-10">
          <span className="flex h-36 w-36 items-center justify-center rounded-full bg-white">
            image
          </span>
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
            <ul className="ml-3.5 list-disc space-y-1">
              <li className="text-white ">Typescript</li>
              <li className="text-white ">Golang</li>
              <li className="text-white ">GraphQL</li>
            </ul>
          </div>
          <nav className="flex flex-col space-y-2">
            <Text size="large" tag="h2" color="white">
              SNS
            </Text>
            <ul className="ml-3.5  list-disc space-y-1">
              <li className="text-white">Github</li>
              <li className="text-white">zenn</li>
              <li className="text-white">qiita</li>
            </ul>
          </nav>
        </div>
      </div>
    </Layout>
  );
}
