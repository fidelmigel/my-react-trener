import { useEffect } from "react";
import s from "./Modal.module.css";

const Modal = ({ children, title = "Default modal", onClose }) => {
  useEffect(() => {
    console.log("modal is Open");
  }, []);
  const handleBackdropClick = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={s.content}>
        <h1>{title}</h1>
        <hr />
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
