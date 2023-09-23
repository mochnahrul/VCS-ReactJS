const Button = (props) => {
  const { children, variant = "bg-black text-white" } = props;
  return (
    <button className={`font-semibold ${variant} rounded-md h-10 px-6`} type="submit">
      {children}
    </button>
  );
};

export default Button;
