import React from "react";

export const SetValue = React.memo(({ handleClick }) => {
  console.log("SetValue");
  return (
    <>
      <button type="button" onClick={() => handleClick(100)}>
        set100
      </button>
      <button type="button" onClick={() => handleClick(200)}>
        set200
      </button>
      <button type="button" onClick={() => handleClick(300)}>
        set300
      </button>
    </>
  );
});
