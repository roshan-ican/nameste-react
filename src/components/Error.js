import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("Route Error:", err);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Something went wrong.</h2>
      <h3 className="text-lg text-gray-600">
        {err?.status ?? "Unknown Status"} : {err?.error?.message ?? "No error message available"}
      </h3>
    </div>
  );
};

export default Error;