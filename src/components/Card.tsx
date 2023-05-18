import React, { memo } from "react";
import { Text } from "@/components/Text";
import dayjs from "dayjs";
import { Badge, BadgeColorOptions } from "@/components/Badge";

type Props = {
  title: string;
  subtitle?: string;
  badge: {
    label: string;
    color?: BadgeColorOptions;
  };
  publishedAt?: string;
};

export const Card: React.FC<Props> = memo((props) => {
  const { title, subtitle, badge, publishedAt } = props;
  return (
    <div className="card h-48 w-72 cursor-pointer bg-slate-200 shadow-xl">
      <div className="card-body max-h-40 px-6 pt-6 pb-3">
        <Text color="black" size="large" tag="h2" className="line-clamp-4">
          {title}
        </Text>
        {subtitle && (
          <Text color="black" size="small" tag="h2" className="line-clamp-4">
            {subtitle}
          </Text>
        )}
      </div>
      <div className="flex h-10 items-center justify-between rounded-b-2xl bg-slate-400 px-8">
        <Badge {...badge} />
        <Text color="black" size="small" className="opacity-90">
          {publishedAt && dayjs(publishedAt).format("YYYY/MM/DD")}
        </Text>
      </div>
    </div>
  );
});
