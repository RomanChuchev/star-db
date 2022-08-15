import React, { useEffect } from "react";
import "./error-button.css";

const ErrorButton = () => {
  const [renderError, setRenderError] = useEffect(false);

  if (renderError) {
    foo.bar = 0;
  }

  return (
    <button
      className="error-button btn btn-danger btn-lg"
      onClick={() => setRenderError(true)}
    >
      Throw Error
    </button>
  );
};

export default ErrorButton;
