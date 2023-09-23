const Input = (props) => {
  const { name, type, placeholder } = props;
  return <input name={name} type={type} id={name} className="block w-full text-sm border border-slate-500 p-2 rounded-md" placeholder={placeholder} />;
};

export default Input;
