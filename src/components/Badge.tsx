import React from "react";

export type BadgeColorOptions = "red" | "blue" | "green" | "yellow";

type Props = {
  label: string;
  color: BadgeColorOptions;
};

export const Badge: React.FC<Props> = ({ label, color }) => {
  return (
    <span className={["badge border-none", badgeColors[color]].join(" ")}>
      {label}
    </span>
  );
};

const badgeColors: { [key in BadgeColorOptions]: string } = {
  red: "bg-red-500 text-white",
  blue: "bg-blue-500 text-white",
  green: "bg-green-500 text-white",
  yellow: "bg-yellow-500 text-white",
};
