const Button = (props) => {
  const { children, variant = "bg-black text-white", type = "button", onClick = () => {} } = props;
  return (
    <button className={`${variant} rounded-md py-2 px-4`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
