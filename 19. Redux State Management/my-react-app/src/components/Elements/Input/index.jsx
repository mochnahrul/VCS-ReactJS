import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputGroup = forwardRef((props, ref) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-2">
      <Label htmlfor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});

InputGroup.displayName = "InputGroup";

export default InputGroup;
