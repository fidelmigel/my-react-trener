import { useState } from "react";
import { ColorPicker } from "../components/ColorPicker/ColorPicker";
import { Counter } from "../components/Counter/Counter";
import { TodoList } from "../components/TodoList/TodoList";
import Modal from "../components/Modal/Modal";
import Vote from "../components/Vote/Vote";
import FormRegister from "../components/Form/Form";
import ControlledForm from "../components/Form/ControlledForm";
import FullForm from "../components/Form/FullForm";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <Vote />
      <Counter />
      <ColorPicker />
      <TodoList />
      <button onClick={openModal}>Open modal</button>
      {isOpen && (
        <Modal onClose={closeModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe
          voluptatum blanditiis assumenda maxime quam ipsum, ratione sed
          similique quo ipsa quia minima quisquam inventore numquam culpa omnis
          itaque corrupti?
        </Modal>
      )}

      <h1>🤖FORMIK🤖</h1>
      <FormRegister />
      <h1>ControlledForm </h1>
      <ControlledForm />
      <h1>FullForm </h1>
      <FullForm />
    </div>
  );
};

export default App;
