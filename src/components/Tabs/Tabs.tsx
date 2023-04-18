import React, { HTMLAttributes, memo } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export const Tabs: React.FC<Props> = memo((props) => {
  const { children, ...rest } = props;

  return (
    <div className="tabs" {...rest}>
      {children}
    </div>
  );
});
