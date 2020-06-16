import React from "react";

export const InputName = React.memo(({ handleInput }) => {
  console.log("InputName");
  return (
    <>
      <input type="text" onChange={e => handleInput(e.target.value)} />
    </>
  );
});
