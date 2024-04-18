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

// Importation de React et des styles :
// Nous importons React et le fichier de style Sass associé à ce composant.
// Définition des types de props :
// Nous définissons le type AddTaskModalProps qui contient deux propriétés :
// onClose: une fonction qui sera appelée pour fermer la modal.
// onCreateTask: une fonction qui prend le contenu de la nouvelle tâche en tant que paramètre et sera appelée pour créer la nouvelle tâche.
// Composant AddTaskModal :
// AddTaskModal est une fonction qui prend les props onClose et onCreateTask.
// À l'intérieur de AddTaskModal, nous utilisons l'état local newTaskContent pour stocker le contenu de la nouvelle tâche à créer.
// Gestion de l'input :
// Nous avons une fonction inputValue qui est appelée à chaque changement dans l'input. Cette fonction met à jour l'état newTaskContent avec la valeur actuelle de l'input.
// Création de la tâche :
// Lorsque l'utilisateur clique sur le bouton "Valider", la fonction createTask est appelée. Cette fonction appelle onCreateTask avec le contenu de la nouvelle tâche, puis appelle onClose pour fermer la modal.
// Affichage de la modal :
// Nous affichons la modal avec un titre, un input pour saisir le contenu de la nouvelle tâche, et un bouton "Valider" pour créer la tâche.
// Le bouton "X" en haut à droite permet de fermer la modal en appelant la fonction onClose.
// En résumé, le composant AddTaskModal est une fenêtre modale permettant à l'utilisateur de saisir le contenu d'une nouvelle tâche. Une fois la tâche saisie et validée, elle est créée en appelant la fonction onCreateTask, puis la modal est fermée avec la fonction onClose.
