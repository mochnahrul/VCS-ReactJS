const AuthLayout = (props) => {
  const { children, title, description } = props;
  return (
    <div className="flex justify-center items-center bg-slate-800 min-h-screen">
      <div className="w-full max-w-sm bg-white rounded-lg p-6">
        <div className="flex flex-col gap-y-2 mb-4">
          <h1 className="font-bold text-3xl text-blue-800">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
