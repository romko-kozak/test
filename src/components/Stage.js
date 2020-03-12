import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

const Stage = ({ name, stageId, tasks, handleTask }) => {
  return (
    <div
      data-testid={`stage-${stageId}`}
      style={{
        flexGrow: 1,
        margin: '1rem',
        paddingBottom: '1rem',
        background: '#fafafa',
      }}>
      <h2>{name}</h2>
      <div>
        {tasks.map(task => (
          <Task
            key={task.name}
            name={task.name}
            handleTask={handleTask}
          />
        ))}
      </div>
    </div>
  );
};

Stage.propTypes = {
  handleTask: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  stageId: PropTypes.number.isRequired,
  tasks: PropTypes.array.isRequired
}

export default Stage;
