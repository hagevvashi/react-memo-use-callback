import React from "react";

export const Counter = React.memo(({ count }) => {
  console.log("Counter");
  return <p>count: {count}</p>;
});
