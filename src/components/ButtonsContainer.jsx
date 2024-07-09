import CalculatorButtons from "./CalculatorButtons";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onClickAction }) => {
  return (
    <div className={styles.container}>
      <CalculatorButtons handleOnClick={onClickAction} />
    </div>
  );
};

export default ButtonsContainer;
