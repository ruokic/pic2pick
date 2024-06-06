interface TextProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  weight?: "light" | "normal" | "bold";
  color?: "inherit" | "white";
  children: JSX.Element | JSX.Element[];
}

export function Text({
  size = "base",
  weight = "normal",
  color = "inherit",
  children,
}: TextProps) {
  return (
    <span className={`text-${size} font-${weight} text-${color}`}>
      {children}
    </span>
  );
}
