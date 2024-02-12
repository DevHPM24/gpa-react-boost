interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color + " mt-3"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
