import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children, onClose }: Props) {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        type="button"
        onClick={onClose}
        className="btn-close"
        data-bs-dismiss="alert"
      ></button>
    </div>
  );
}

export default Alert;
