import Button from "../Elements/Button";
import InputGroup from "../Elements/Input";

const RegisterForm = () => {
  return (
    <form action="#">
      <InputGroup label="Name" name="name" type="text" placeholder="Enter your Name"></InputGroup>
      <InputGroup label="Email" name="email" type="email" placeholder="Enter your Email"></InputGroup>
      <InputGroup label="Password" name="password" type="password" placeholder="Enter your Password"></InputGroup>
      <InputGroup label="Confirm Password" name="confirm" type="password" placeholder="Confirm your Password"></InputGroup>
      <Button variant="w-full bg-blue-800 text-white mt-2">Register</Button>
    </form>
  );
};

export default RegisterForm;
