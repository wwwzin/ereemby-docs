import Link from "fumadocs-core/link";
import type { HTMLAttributes, ReactNode } from "react";
import { twMerge as cn } from 'tailwind-merge';

export function Cards(
  props: HTMLAttributes<HTMLDivElement>,
): React.ReactElement {
  return (
    <div
      {...props}
      className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2", props.className)}
    >
      {props.children}
    </div>
  );
}

export type CardProps = HTMLAttributes<HTMLElement> & {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;

  href?: string;
  external?: boolean;
};

export function Card({
  icon,
  title,
  description,
  ...props
}: CardProps): React.ReactElement {
  const E = props.href ? Link : "div";

  return (
    <E
      {...props}
      data-card
      className={cn(
        "block rounded-lg border bg-fd-card p-4 text-fd-card-foreground shadow-md transition-colors",
        props.href && "hover:bg-fd-accent/80",
        props.className,
      )}
    >
      <div className="flex gap-2 items-center">
        {icon ? (
          <div className="not-prose w-fit rounded-md border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4">
            {icon}
          </div>
        ) : null}
        <h3 className="not-prose text-sm font-medium">{title}</h3>
      </div>
      {description ? (
        <p className="my-0 text-sm text-fd-muted-foreground">{description}</p>
      ) : null}
      {props.children ? (
        <div className="text-sm text-fd-muted-foreground prose-no-margin">
          {props.children}
        </div>
      ) : null}
    </E>
  );
}