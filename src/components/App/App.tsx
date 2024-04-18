import { useState } from 'react';
import AddTaskModal from '../AddTaskModal/AddTaskModal';
import './App.scss';
import Task from '../Task/Task';

function App() {
  const [isActive, setIsActive] = useState(false); // Etat qui gere l'affichage de la modal
  const [taskArray, setTaskArray] = useState<{ id: number; content: string }[]>(
    []
  ); // Etat qui sert a stocker les taches
  const [idCounter, setIdCounter] = useState(1); // Etat qui gere le compteur qui genere les id unique

  // Fonction pour afficher la modal
  const showModal = () => {
    setIsActive(true);
  };
  // Fonction pour fermer la modal
  const closeModal = () => {
    setIsActive(false);
  };

  // Fonction pour creer une nouvelle tache
  const createTask = (taskContent: string) => {
    const newTask = {
      id: idCounter, // Utiliser le compteur d'ID pour générer un identifiant numérique unique
      content: taskContent,
    };
    setTaskArray([...taskArray, newTask]); // Ajout de la nouvelle tâche à la liste des tâches
    setIdCounter(idCounter + 1); // Incrémentation du compteur d'ID pour la prochaine tâche
    // console.log(taskArray);
  };

  const deleteTask = (taskId: number) => {
    setTaskArray(taskArray.filter((task) => task.id !== taskId));
  };
  return (
    <div className="app">
      <h1 className="app__title">TodoList</h1>
      <button type="button" className="app__button" onClick={showModal}>
        Ajoutez une tâche
      </button>
      {isActive && (
        <AddTaskModal onClose={closeModal} onCreateTask={createTask} />
      )}
      <Task tasks={taskArray} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;

// Imports :
// Nous importons useState de React pour gérer les états dans notre composant.
// Nous importons AddTaskModal et Task depuis leurs emplacements respectifs. AddTaskModal est probablement un composant de fenêtre modale pour ajouter de nouvelles tâches, tandis que Task est le composant qui affiche les tâches existantes.
// Déclaration des états :
// Nous utilisons useState pour créer trois états :
// isActive: Pour gérer l'affichage de la modal.
// taskArray: Pour stocker les tâches.
// idCounter: Pour générer des identifiants uniques pour les tâches.
// Fonctions de gestion de la modal :
// showModal: Active l'affichage de la modal en mettant à jour l'état isActive sur true.
// closeModal: Désactive l'affichage de la modal en mettant à jour l'état isActive sur false.
// Fonction pour créer une nouvelle tâche :
// createTask: Prend le contenu de la tâche comme argument, crée un nouvel objet de tâche avec un identifiant unique généré à partir de idCounter, puis met à jour l'état taskArray en ajoutant la nouvelle tâche. Il incrémente également idCounter pour la prochaine tâche.
// Fonction pour supprimer une tâche :
// deleteTask: Prend l'identifiant de la tâche à supprimer comme argument, puis utilise filter pour créer un nouveau tableau de tâches qui exclut la tâche avec l'identifiant spécifié. Cela met à jour l'état taskArray avec le nouveau tableau filtré, supprimant ainsi la tâche.
// Rendu du composant App :
// Nous rendons le titre de l'application, un bouton pour ouvrir la modal, la modal elle-même si isActive est vrai, et enfin le composant Task pour afficher les tâches existantes. Nous passons taskArray à Task pour afficher les tâches, et deleteTask pour permettre la suppression des tâches.
// Cela résume la fonction App et son fonctionnement dans l'application.
