interface ListProps {
  children: JSX.Element | JSX.Element[];
}

export function List({ children }: ListProps) {
  return <ul className="flex flex-col overflow-y-auto">{children}</ul>;
}
