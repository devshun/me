import { Layout } from "@/components/Layout";
import { Text } from "@/components/Text";

const Custom404 = () => {
  return (
    <Layout>
      <div className="flex items-center space-x-12">
        <Text size="xlarge" tag="h1">
          404
        </Text>
        &nbsp;
        <p className="text-base text-white">This page could not be found</p>
      </div>
    </Layout>
  );
};

export default Custom404;
