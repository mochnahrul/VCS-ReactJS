import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { name, type, placeholder } = props;
  return <input name={name} type={type} id={name} className="block w-full text-sm border border-slate-500 p-2 rounded-md" placeholder={placeholder} ref={ref} />;
});

Input.displayName = "Input";

export default Input;
