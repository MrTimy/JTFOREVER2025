interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variants?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  loadingText?: string;
}

export default function Button({
  text,
  onClick,
  className,
  variants,
  disabled,
  type,
  size,
  icon,
  iconPosition,
  loading,
  loadingText,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center font-cairo text-lg font-normal text-shadow-white gap-2 rounded-md py-2.5 px-7.5 cursor-pointer ${className} ${
        variants === "primary" ? "bg-chocolate-brown text-white" : ""
      } ${size} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      type={type}
      disabled={disabled}
    >
      {loading ? (
        <>{loadingText}</>
      ) : (
        <>
          {icon && iconPosition === "left" && icon}
          {text}
          {icon && iconPosition === "right" && icon}
        </>
      )}
    </button>
  );
}
