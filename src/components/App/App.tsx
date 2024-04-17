import { useState } from 'react';
import AddTaskModal from '../AddTaskModal/AddTaskModal';
import './App.scss';

function App() {
  const [isActive, setIsActive] = useState(false);

  const showModal = () => {
    setIsActive(true);
  };

  const closeModal = () => {
    setIsActive(false);
  };
  return (
    <div className="app">
      <h1 className="app__title">TodoList</h1>
      <button type="button" className="app__button" onClick={showModal}>
        Ajoutez une tâche
      </button>
      {isActive && <AddTaskModal onClose={closeModal} />}
    </div>
  );
}

export default App;
