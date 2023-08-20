import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const {status,statusText}= err
  console.log(err);
  return (
    <div>
      <h1>oops!!!!</h1>
      <h1>something awent wrong</h1>
      <h1>{status + " : " + statusText}</h1>
    </div>
  );
};
export { Error };
