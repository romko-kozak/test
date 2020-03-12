import React from 'react';
import PropTypes from 'prop-types';

const taskNameToId = name => {
  return `task-${name}`;
}

const Task = ({ name, handleTask }) => {
  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid #ccc',
        margin: '1rem 1rem 0 1rem' }}
      data-testid={taskNameToId(name)}
      onClick={() => handleTask(name)}
    >
      {name}
    </div>
  );
}

Task.propTypes = {
  handleTask: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Task;
