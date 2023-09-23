import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, description, type } = props;
  return (
    <div className="flex justify-center items-center bg-slate-800 min-h-screen">
      <div className="w-full max-w-sm bg-white rounded-lg p-6">
        <div className="flex flex-col gap-y-2 mb-4">
          <h1 className="font-bold text-3xl text-blue-800">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm text-center mt-4">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="font-semibold text-blue-800">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-blue-800">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
