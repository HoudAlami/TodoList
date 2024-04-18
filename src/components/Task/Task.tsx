import React, { useState } from 'react';
import './Task.scss';

type TaskProps = {
  tasks: {
    id: number;
    content: string;
  }[];
  onDeleteTask: (taskId: number) => void;
};

function Task({ tasks, onDeleteTask }: TaskProps) {
  const handleDeleteTask = (taskId: number) => {
    onDeleteTask(taskId);
  };

  return (
    <div className="task">
      <ul className="task__list">
        {tasks.map((task) => (
          <li className="task__item" key={task.id.toString()}>
            {task.content}
            <button
              type="button"
              className="task__button"
              onClick={() => handleDeleteTask(task.id)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;

// Importation de React et des styles :
// Nous importons React et le fichier de style Sass associé à ce composant.
// Définition des types de props :
// Nous définissons le type TaskProps qui contient deux propriétés :
// tasks: un tableau d'objets représentant les tâches à afficher.
// onDeleteTask: une fonction qui prend l'identifiant d'une tâche à supprimer en tant que paramètre.
// Composant Task :
// Task est une fonction qui prend les props tasks et onDeleteTask.
// À l'intérieur de Task, nous définissons une fonction handleDeleteTask qui prend l'identifiant d'une tâche à supprimer et appelle la fonction onDeleteTask avec cet identifiant lorsque le bouton "Supprimer" est cliqué.
// Affichage des tâches :
// Le composant Task affiche une liste (ul) avec chaque tâche représentée par un élément de liste (li).
// Pour chaque tâche, nous affichons son contenu (task.content) et un bouton "Supprimer".
// Lorsque le bouton "Supprimer" est cliqué, il appelle handleDeleteTask avec l'identifiant de la tâche correspondante.
// Propagation de la fonction de suppression :
// Nous passons la fonction handleDeleteTask en tant que gestionnaire d'événement pour le clic sur le bouton "Supprimer". Cela permet à App de gérer la suppression de la tâche lorsque le bouton est cliqué.
// En résumé, le composant Task prend une liste de tâches et une fonction pour supprimer une tâche. Il affiche ces tâches dans une liste et permet à l'utilisateur de les supprimer en cliquant sur un bouton "Supprimer".
