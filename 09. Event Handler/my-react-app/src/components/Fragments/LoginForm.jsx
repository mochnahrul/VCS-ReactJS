import Button from "../Elements/Button";
import InputGroup from "../Elements/Input";

const LoginForm = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputGroup label="Email" name="email" type="email" placeholder="Enter your email"></InputGroup>
      <InputGroup label="Password" name="password" type="password" placeholder="Enter your Password"></InputGroup>
      <Button variant="w-full bg-blue-800 text-white mt-2" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
