import React, { ChangeEvent, useState } from 'react';
import './AddTaskModal.scss';

type AddTaskModalProps = {
  onClose: () => void;
  onCreateTask: (taskContent: string) => void;
};

function AddTaskModal({ onClose, onCreateTask }: AddTaskModalProps) {
  // J'initie mon state de la nouvelle tache a creer avec une chaine de caractère vide.
  const [newTaskContent, setNewTaskContent] = useState('');

  // J'indique que la valeur de ma nouvelle tache sera la valeur que je vais rentrer dans l'input, que je stock dans une variable
  const inputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskContent(event.target.value);
  };

  const createTask = () => {
    onCreateTask(newTaskContent);
    onClose();
  };
  return (
    <div className="addTaskModal">
      <button type="button" className="addTaskModal__close" onClick={onClose}>
        X
      </button>
      <h2 className="addTaskModal__title">Précisez votre tâche</h2>
      <input
        type="text"
        className="addTaskModal__input"
        value={newTaskContent}
        onChange={inputValue}
      />
      <button
        type="button"
        className="addTaskModal__button"
        onClick={createTask}
      >
        Valider
      </button>
    </div>
  );
}

export default AddTaskModal;
