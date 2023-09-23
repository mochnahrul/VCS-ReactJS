import RegisterForm from "../components/Fragments/RegisterForm";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" description="Register to your account" type="register">
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
