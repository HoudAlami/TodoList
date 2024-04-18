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
    setTaskArray([...taskArray, newTask]);
    setIdCounter(idCounter + 1);
    console.log(taskArray);
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
