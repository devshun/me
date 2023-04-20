import React, { AnchorHTMLAttributes, memo, useMemo } from "react";
import { Text } from "@/components/Text";
import { useRouter } from "next/router";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  url: string;
};

export const Tab: React.FC<Props> = memo((props) => {
  const { children, color = "white", url, ...rest } = props;

  const router = useRouter();

  const isActive = useMemo(
    () => url === router.pathname,
    [url, router.pathname]
  );

  return (
    <Text
      size="large"
      color={isActive ? "white" : "gray"}
      url={url}
      className={[
        "tab tab-bordered min-w-[10rem] no-underline hover:text-white ease-in-out duration-100 transition",
        isActive && "tab-active pointer-events-none",
      ].join(" ")}
      {...rest}
    >
      {children}
    </Text>
  );
});
