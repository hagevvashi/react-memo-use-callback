import React from "react";

export const DisplayName = React.memo(({ name }) => {
  console.log("DisplayName");
  return <p>name: {name}</p>;
});
