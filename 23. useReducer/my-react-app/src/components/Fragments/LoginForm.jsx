import { useState, useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputGroup from "../Elements/Input";
import { login } from "../../services/auth.service";

const LoginForm = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const inputRef = useRef(null);

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <form onSubmit={handleLogin}>
      <InputGroup label="Username" name="username" type="username" placeholder="Enter your Username" ref={inputRef}></InputGroup>
      <InputGroup label="Password" name="password" type="password" placeholder="Enter your Password"></InputGroup>
      <Button variant="w-full bg-blue-800 text-white mt-2" type="submit">
        Login
      </Button>
      {loginFailed && <p className="text-red-500">{loginFailed}</p>}
    </form>
  );
};

export default LoginForm;
