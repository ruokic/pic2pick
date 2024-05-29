interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

const sizeMap = {
  small: "text-xs py-2.5 px-4",
  medium: "text-sm py-2.5 px-5",
  large: "text-base py-3 px-6",
};

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const defaultStyle =
    "font-sans font-bold rounded-full cursor-pointer leading-none";
  const mode = primary
    ? "text-white bg-blue-500"
    : "text-black bg-transparent shadow";
  return (
    <button
      type="button"
      className={[defaultStyle, sizeMap[size], mode].join(" ")}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
