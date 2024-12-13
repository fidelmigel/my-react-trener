import s from "./Counter.module.css";

export const Counter = () => {
  const handleClickPlus = (e) => {
    console.log("Plus click");
    console.log(e);
    e.target.innerHTML = "Зміна назви кнопки";
  };
  const handleReset = (name) => {
    console.log(`Hallo ${name}`);
  };
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{1}</h1>
        <div className={s.flex}>
          <button onClick={() => console.log("Hello")} className="btn">
            minus
          </button>
          <button onClick={() => handleReset("Tom")} className="btn">
            reset
          </button>
          <button onClick={(e) => handleClickPlus(e)} className="btn">
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
