import Button from "../Elements/Button";
import InputGroup from "../Elements/Input";

const LoginForm = () => {
  return (
    <form action="#">
      <InputGroup label="Email" name="email" type="email" placeholder="Enter your Email"></InputGroup>
      <InputGroup label="Password" name="password" type="password" placeholder="Enter your Password"></InputGroup>
      <Button variant="w-full bg-blue-800 text-white mt-2">Login</Button>
    </form>
  );
};

export default LoginForm;
