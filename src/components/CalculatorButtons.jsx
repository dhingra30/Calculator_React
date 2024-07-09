import styles from "./CalculatorButtons.module.css";

const CalculatorButtons = ({ handleOnClick }) => {
  const calcButtons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return calcButtons.map((buttonItems) => (
    <button
      key={buttonItems}
      type="button"
      className={`${styles.buttonConfig} btn btn-infox`}
      onClick={(event) => handleOnClick(event, buttonItems)}
    >
      {buttonItems}
    </button>
  ));
};

export default CalculatorButtons;
