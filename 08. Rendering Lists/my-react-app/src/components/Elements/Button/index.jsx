const Button = (props) => {
  const { children, variant = "bg-black text-white" } = props;
  return (
    <button className={`${variant} rounded-md py-2 px-4`} type="submit">
      {children}
    </button>
  );
};

export default Button;
