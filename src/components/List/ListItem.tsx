import React, { HTMLAttributes, memo, useCallback } from "react";

type Props = HTMLAttributes<HTMLLIElement> & {
  url?: string;
};

export const ListItem: React.FC<Props> = memo((props) => {
  const { children, className, url, ...rest } = props;

  const ListItemElement = useCallback(() => {
    return (
      <li
        className={["text-white", url && urlClasses, className].join(" ")}
        {...rest}
      >
        {url ? (
          <a href={url} target="_blank">
            {children}
          </a>
        ) : (
          children
        )}
      </li>
    );
  }, [children, className, url, rest]);

  return <ListItemElement />;
});

const urlClasses =
  "cursor-pointer underline decoration-transparent transition duration-100 ease-in-out hover:decoration-inherit";
