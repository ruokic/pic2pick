import classNames from "classnames";

interface ListItemProps {
  children: JSX.Element | JSX.Element[];
  selected?: boolean;
}

export function ListItem({ children, selected = false }: ListItemProps) {
  return (
    <li
      className={classNames("rounded p-1 px-4 hover:bg-blue-100 flex gap-4", {
        "bg-blue-300": selected,
      })}
    >
      {children}
    </li>
  );
}
