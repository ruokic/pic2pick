interface ListItemProps {
  children: JSX.Element | JSX.Element[];
  selected?: boolean;
}

export function ListItem({ children, selected = false }: ListItemProps) {
  return (
    <li
      className={[
        "rounded p-1 px-4 hover:bg-blue-100 flex justify-between",
        selected ? "bg-blue-300" : "",
      ].join(" ")}
    >
      {children}
    </li>
  );
}
