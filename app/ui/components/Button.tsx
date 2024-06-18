import classNames from "classnames";

interface ButtonProps {
  primary?: boolean;
  warning?: boolean;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  primary = false,
  warning = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        "rounded cursor-pointer leading-none disabled:opacity-50",
        {
          "text-xs py-2 px-4": size === "small",
          "text-sm py-2.5 px-5": size === "medium",
          "text-base py-3 px-6": size === "large",

          "text-white bg-red-500": warning,
          "text-white bg-blue-500": !warning && primary,
          "text-black bg-transparent shadow": !warning && !primary,
        }
      )}
      {...props}
    >
      {label}
    </button>
  );
}
