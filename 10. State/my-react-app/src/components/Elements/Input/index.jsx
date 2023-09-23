import Input from "./Input";
import Label from "./Label";

const InputGroup = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-2">
      <Label htmlfor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputGroup;
