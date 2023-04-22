import { BadgeColorOptions } from "@/components/Badge";

export type Article = {
  id: string;
  title: string;
  url: string;
  badge: {
    label: string;
    color: BadgeColorOptions;
  };
  publishedAt: string;
};
