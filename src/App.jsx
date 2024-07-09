import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import DisplayBox from "./components/DisplayBox";
import { useState } from "react";

function App() {
  const [initialValue, setInitialValue] = useState("");
  const onClickAction = (event) => {
    let currentVal = event.target.innerText;

    if (currentVal === "C") {
      setInitialValue("");
    } else if (currentVal === "=") {
      const result = eval(initialValue);
      setInitialValue(result);
    } else {
      let newVal = initialValue + currentVal;
      setInitialValue(newVal);
    }
  };

  return (
    <div className={styles.calculator}>
      <DisplayBox displayValue={initialValue} />
      <ButtonsContainer onClickAction={onClickAction} />
    </div>
  );
}

export default App;
