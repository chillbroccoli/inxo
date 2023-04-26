import clsx from "clsx";

type TitleOrder = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TitleProps = {
  order: TitleOrder;
  children: React.ReactNode;
};

export function Title({ order, children }: TitleProps) {
  return (
    <p
      className={clsx(
        "text-primary font-semibold",
        order === "h1" && "text-4xl",
        order === "h2" && "text-3xl",
        order === "h3" && "text-2xl",
        order === "h4" && "text-xl",
        order === "h5" && "text-lg",
        order === "h6" && "text-base"
      )}
    >
      {children}
    </p>
  );
}
