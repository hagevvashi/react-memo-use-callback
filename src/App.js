import React, { useState, useCallback } from "react";
import "./styles.css";
import { Counter } from "./Counter";
import { SetValue } from "./SetValue";
import { Increment } from "./Increment";
import { DisplayName } from "./DisplayName";
import { InputName } from "./InputName";

export default function App() {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const handleClick = useCallback(
    count => {
      setValue(count);
    },
    [setValue]
  );
  const increment = useCallback(() => {
    setValue(value + 1);
  }, [value, setValue]);
  const handleInput = useCallback(
    changedName => {
      setName(changedName);
    },
    [setName]
  );
  return (
    <div className="App">
      <Counter count={value} />
      <SetValue handleClick={handleClick} />
      <Increment increment={increment} />
      <Hoge />
      <DisplayName name={name} />
      <InputName handleInput={handleInput} />
    </div>
  );
}

const Hoge = React.memo(() => {
  console.log("Hoge");
  return <div>hoge</div>;
});
