import classNames from "classnames";

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  style?: string;
}

export function Container({ children, style = "" }: ContainerProps) {
  return (
    <div className={classNames("p-4 flex flex-col gap-2 flex-grow", style)}>
      {children}
    </div>
  );
}
