import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("err", err);
  return (
    <div>
      <h1>{err.error.message}</h1>
      <h2>{err.status}</h2>
    </div>
  );
};

export default Error;
