import Link, { LinkProps } from "next/link";
import React, {
  ElementType,
  forwardRef,
  HTMLAttributes,
  memo,
  ReactElement,
  RefObject,
  useCallback,
} from "react";

type SizeOptions = "small" | "medium" | "large" | "xlarge";

type ColorOptions = "white" | "gray" | "black";

type BaseProps = {
  size?: SizeOptions;
  color?: ColorOptions;
  url?: string | LinkProps["href"];
  tag?: Extract<
    ElementType,
    "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a"
  >;
};

type TextElement =
  | HTMLDivElement
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLSpanElement
  | HTMLAnchorElement;

type TextProps = HTMLAttributes<TextElement> & BaseProps;

const TextComponent = forwardRef<TextElement, TextProps>(
  (props, ref): ReactElement => {
    const {
      tag: Tag = "div",
      children,
      className,
      size = "medium",
      color = "white",
      url,
      ...rest
    } = props;

    const classes = [
      className,
      size && sizeClasses[size],
      color && colorClasses[color],
      url && linkClasses,
    ].join(" ");

    const TextElement = useCallback(() => {
      return (
        <Tag
          className={classes}
          ref={
            ref as
              | ((
                  instance: (HTMLAnchorElement & HTMLDivElement) | null
                ) => void)
              | RefObject<HTMLAnchorElement & HTMLDivElement>
          }
          {...rest}
        >
          {url ? <Link href={url}>{children}</Link> : children}
        </Tag>
      );
    }, [Tag, classes, ref, children, url, rest]);

    return <TextElement />;
  }
);

export const Text = memo(TextComponent);

const sizeClasses: { [key in SizeOptions]: string } = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg font-semibold",
  xlarge: "text-2xl font-semibold",
};

const colorClasses: { [key in ColorOptions]: string } = {
  white: "text-white",
  gray: "text-gray-400",
  black: "text-black",
};

const linkClasses =
  "underline cursor-pointer decoration-transparent transition duration-100 ease-in-out hover:decoration-inherit";
