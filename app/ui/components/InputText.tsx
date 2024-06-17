import { forwardRef } from "react";
import classNames from "classnames";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isFocus?: boolean;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  function InputText({ isFocus, ...props }, ref) {
    return (
      <div className="relative">
        <input
          type="text"
          ref={ref}
          className="focus:outline-none p-2"
          spellCheck="false"
          {...props}
        />
        <div
          className={classNames(
            "absolute border-b-2 transition-transform border-black origin-left duration-300",
            { "w-full scale-x-100": isFocus, "w-0 scale-x-0": !isFocus }
          )}
        />
      </div>
    );
  }
);
