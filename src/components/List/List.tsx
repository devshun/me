import React, { HTMLAttributes, memo } from "react";

type Props = HTMLAttributes<HTMLUListElement>;

export const List: React.FC<Props> = memo((props) => {
  const { children, className, ...rest } = props;
  return (
    <ul className={["list-disc space-y-1", className].join(" ")} {...rest}>
      {children}
    </ul>
  );
});
