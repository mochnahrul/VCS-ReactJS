import { Link } from "react-router-dom";
import LoginForm from "../components/Fragments/LoginForm";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" description="Login to your account">
      <LoginForm />
      <p className="text-sm text-center mt-4">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="font-semibold text-blue-800">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
