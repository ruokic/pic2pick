interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  style?: string;
}

export function Container({ children, style = "" }: ContainerProps) {
  return (
    <div className={["p-4 flex flex-col gap-2 flex-grow", style].join(" ")}>
      {children}
    </div>
  );
}
