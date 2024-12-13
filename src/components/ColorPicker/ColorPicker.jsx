import s from "../ColorPicker/ColorPicker.module.css";
import colors from "./../../data/colors.json";
export const ColorPicker = () => {
  return (
    <section className={s.bgWrapper}>
      <div className={s.pallette}>
        <ul className={s.list}>
          {colors.map((item) => (
            <li className={s.item} key={item.id}>
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
