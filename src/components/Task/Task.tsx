import React, { useState } from 'react';

type TaskProps = {
  tasks: {
    id: number;
    content: string;
  }[];
};

function Task({ tasks }: TaskProps) {
  // const [taskArray, setTaskArray] = useState([]);

  return (
    <div className="task">
      <ul className="task__list">
        {tasks.map((task) => (
          <li className="task__item" key={task.id.toString()}>
            {task.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
