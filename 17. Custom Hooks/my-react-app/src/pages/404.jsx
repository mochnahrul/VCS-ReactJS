import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 bg-slate-800 text-white min-h-screen">
      <h1 className="font-bold text-4xl">Oops!</h1>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <p>Sorry, an unexpected error has occured</p>
        <p>{error.statusText || error.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
