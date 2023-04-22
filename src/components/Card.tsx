import React, { memo } from "react";
import { Text } from "@/components/Text";
import dayjs from "dayjs";

type BadgeColorOptions = "red" | "blue" | "green" | "yellow";

type Props = {
  title: string;
  badge: {
    label: string;
    color: BadgeColorOptions;
  };
  publishedAt: string;
};

export const Card: React.FC<Props> = memo((props) => {
  const { title, badge, publishedAt } = props;
  return (
    <div className="card h-48 w-72 cursor-pointer bg-slate-200 shadow-xl">
      <Text
        color="black"
        size="large"
        tag="h2"
        className="card-body line-clamp-4 max-h-40"
      >
        {title}
      </Text>
      <div className="flex h-10 items-center justify-between rounded-b-2xl bg-slate-400 px-8">
        <span
          className={["badge border-none", badgeColors[badge.color]].join(" ")}
        >
          {badge.label}
        </span>
        <Text color="black" size="small" className="opacity-90">
          {dayjs(publishedAt).format("YYYY/MM/DD")}
        </Text>
      </div>
    </div>
  );
});

const badgeColors: { [key in BadgeColorOptions]: string } = {
  red: "bg-red-500 text-white",
  blue: "bg-blue-500 text-white",
  green: "bg-green-500 text-white",
  yellow: "bg-yellow-500 text-white",
};
