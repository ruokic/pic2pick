interface ButtonProps {
  primary?: boolean;
  warning?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const sizeMap = {
  small: "text-xs py-2 px-4",
  medium: "text-sm py-2.5 px-5",
  large: "text-base py-3 px-6",
};

export const Button = ({
  primary = false,
  warning = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const defaultStyle =
    "font-sans rounded cursor-pointer leading-none disabled:opacity-50";
  const mode = warning
    ? "text-white bg-red-500"
    : primary
    ? "text-white bg-blue-500"
    : "text-black bg-transparent shadow";
  return (
    <button
      type="button"
      className={[defaultStyle, sizeMap[size], mode].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
