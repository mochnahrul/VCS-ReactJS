import { Link } from "react-router-dom";
import RegisterForm from "../components/Fragments/RegisterForm";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" description="Register to your account">
      <RegisterForm />
      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-blue-800">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
