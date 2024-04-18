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
