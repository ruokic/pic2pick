import { createPortal } from "react-dom";
import classNames from "classnames";

interface ModalProps {
  showModal: boolean;
  setShowModal: (nextShowModal: boolean) => void;
  children: JSX.Element | JSX.Element[] | string;
  style?: string;
}

export function Modal({
  showModal,
  setShowModal,
  children,
  style,
}: ModalProps) {
  if (!showModal) return null;
  return createPortal(
    <div
      className="absolute w-screen h-screen flex justify-center items-center inset-0 bg-black/70 overflow-auto"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => setShowModal(false)}
    >
      <div
        className={classNames("p-4 bg-white flex flex-col items-center", style)}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
