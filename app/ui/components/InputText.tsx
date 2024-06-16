import { forwardRef } from "react";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  function InputText(props, ref) {
    return (
      <input
        type="text"
        ref={ref}
        className="focus:outline-none"
        spellCheck="false"
        {...props}
      />
    );
  }
);
