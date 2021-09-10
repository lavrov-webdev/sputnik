import React, { Suspense } from "react";
import SuspenseLoader from "../Components/commons/SuspenseLoader/SuspenseLoader";

export const withSuspense = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
      </Suspense>
    );
  };
};
