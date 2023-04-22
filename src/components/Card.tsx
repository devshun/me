import React, { memo } from "react";
import { Text } from "@/components/Text";
import dayjs from "dayjs";
import { Badge, BadgeColorOptions } from "@/components/Badge";

type Props = {
  title: string;
  badge: {
    label: string;
    color?: BadgeColorOptions;
  };
  publishedAt?: string;
};

export const Card: React.FC<Props> = memo((props) => {
  const { title, badge, publishedAt } = props;
  return (
    <div className="card h-44 w-72 cursor-pointer bg-slate-200 shadow-xl">
      <Text
        color="black"
        size="large"
        tag="h2"
        className="card-body line-clamp-4 max-h-36 p-6"
      >
        {title}
      </Text>
      <div className="flex h-10 items-center justify-between rounded-b-2xl bg-slate-400 px-8">
        <Badge {...badge} />
        <Text color="black" size="small" className="opacity-90">
          {publishedAt && dayjs(publishedAt).format("YYYY/MM/DD")}
        </Text>
      </div>
    </div>
  );
});
