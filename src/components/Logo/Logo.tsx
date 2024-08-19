const Logo = ({
  className,
  color = "dark",
}: {
  className?: string;
  color?: "clear" | "dark";
}) => {
  return (
    <img
      src={color === "dark" ? "/UPSRJ_LOGO_DARK.png" : "/UPSRJ_LOGO.png"}
      className={className}
      alt="Logo upsrj"
    />
  );
};

export default Logo;
