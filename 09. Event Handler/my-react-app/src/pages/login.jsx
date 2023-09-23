import LoginForm from "../components/Fragments/LoginForm";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" description="Login to your account" type="login">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
