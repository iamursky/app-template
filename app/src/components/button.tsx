import type { PropsWithChildren } from "react";
import type { PressableProps, View } from "react-native";

import { clsx } from "clsx";
import { forwardRef } from "react";
import { Pressable, Text } from "react-native";

export type TButtonProps = PropsWithChildren<
  PressableProps & {
    className?: string;
    size?: TButtonSize;
    variant?: TButtonVariant;
  }
>;

export type TButtonSize = "default" | "small";

export type TButtonVariant = "ghost" | "primary" | "secondary";

export const Button = forwardRef<View, TButtonProps>(
  ({ children, className, size = "default", variant = "primary", ...props }, ref) => {
    const pressableClassName = clsx(
      "items-center justify-center",
      {
        "bg-accent": variant === "primary",
        "bg-accent-faded": variant === "secondary",
        "bg-transparent": variant === "ghost",
        "rounded-md px-md py-sm": size === "default",
        "rounded-sm px-sm py-xs": size === "small",
      },
      className,
    );

    const textClassName = clsx({
      "color-text-primary": variant === "secondary",
      "text-style-p leading-0": size === "default",
      "text-style-tooltip leading-0": size === "small",
      "text-white": variant === "primary",
      "underline decoration-text-primary decoration-solid color-text-primary": variant === "ghost",
    });

    return (
      <Pressable className={pressableClassName} ref={ref} {...props}>
        <Text className={textClassName}>{children}</Text>
      </Pressable>
    );
  },
);
