import type { LinkProps } from "expo-router";
import type { FC, PropsWithChildren } from "react";

import { clsx } from "clsx";
import { Link as ExpoLink } from "expo-router";

export type TLinkProps = PropsWithChildren<LinkProps & { className?: string }>;

export const Link: FC<LinkProps> = ({ children, className, ...props }) => {
  const linkClassName = clsx(
    "underline decoration-current decoration-solid color-accent",
    className,
  );

  return (
    <ExpoLink className={linkClassName} {...props}>
      {children}
    </ExpoLink>
  );
};
