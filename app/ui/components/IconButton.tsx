import classNames from "classnames";

interface IconButtonProps {
  icon: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
}

export function IconButton({ icon, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={"rounded cursor-pointer leading-none disabled:opacity-50"}
      {...props}
    >
      {icon}
    </button>
  );
}
