import { useEffect, useState } from "react";
import s from "./Counter.module.css";

export const Counter = () => {
  const [counter, setCounter] = useState(1); // Стан для лічильника
  const [step, setStep] = useState(1); // Стан для кроку

  // ця функція виконаєтся лише один раз
  useEffect(() => {
    console.log("компонент зявився в DOM");
  }, []);

  //useEffect(() => {
  //  console.log("змінився лічильник:", counter);
  //  }, [counter]);

  useEffect(() => {
    console.log("змінився лічильник:", counter);
    if (counter === 10) {
      console.log("лічільник = 10, скидаю до 0");
      setCounter(0);
    }
  }, [counter]);

  useEffect(() => {
    console.log("змінився крок для лічильника", step);
  }, [step]);

  const handleClickPlus = () => {
    setCounter((prevState) => prevState + step);
  };

  const handleClickMinus = () => {
    setCounter((prevState) => prevState - step);
  };

  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value) || 1)} // Перетворення на число
        />
        <div className={s.flex}>
          <button onClick={handleClickMinus} className="btn">
            minus
          </button>
          <button onClick={handleReset} className="btn">
            reset
          </button>
          <button onClick={handleClickPlus} className="btn">
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
