// TaskComponent.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading, addTask,removeTask, setError } from '../reducers/taskSlice';

const TaskComponent = () => {
  const [taskName, setTaskName] = useState('');
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ id: tasks.length + 1, name: taskName }));
    setTaskName('');
  };

  const handleRemoveTask = id => {
    dispatch(removeTask(id));
  };

  return (
    <div>
      <h2>Tasks</h2>
      <input
        type="text"
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskComponent;
