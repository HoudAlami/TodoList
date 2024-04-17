import React, { useState } from 'react';
import './AddTaskModal.scss';

type AddTaskModalProps = {
  onClose: () => void;
};

function AddTaskModal({ onClose }: AddTaskModalProps) {
  const closeModal = () => {
    onClose();
  };
  return (
    <div className="addTaskModal">
      <button
        type="button"
        className="addTaskModal__close"
        onClick={closeModal}
      >
        X
      </button>
      <h2 className="addTaskModal__title">Précisez votre tâche</h2>
      <input type="text" className="addTaskModal__input" />
      <button type="button" className="addTaskModal__button">
        Valider
      </button>
    </div>
  );
}

export default AddTaskModal;
