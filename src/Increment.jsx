import React from "react";

export const Increment = React.memo(({ increment }) => {
  console.log("Increment");
  return (
    <>
      <button type="button" onClick={() => increment()}>
        increment
      </button>
    </>
  );
});
