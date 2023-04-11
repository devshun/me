import { Layout } from "@/components/Layout";
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
              software developer, <br /> hhkb lover, <br /> 24 years old,
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
              <li className="cursor-pointer text-white underline decoration-transparent transition duration-100 ease-in-out hover:decoration-inherit">
                <a href="https://github.com/devshun" target="_blank">
                  Github
                </a>
              </li>
              <li className="cursor-pointer text-white underline decoration-transparent transition duration-100 ease-in-out hover:decoration-inherit">
                <a href="https://zenn.dev/dev_shun" target="_blank">
                  Zenn
                </a>
              </li>
              <li className="cursor-pointer text-white underline decoration-transparent transition duration-100 ease-in-out hover:decoration-inherit">
                <a href="https://qiita.com/dev_shun" target="_blank">
                  Qiita
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Layout>
  );
}
