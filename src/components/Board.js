import React from 'react';
import PropTypes from 'prop-types';

import Stage from './Stage';

const Board = ({ stagesNames, stagesTasks, handleTask }) => {
  return (
    <div>
      <h1>Kanban board</h1>
      <div style={{
        display: 'flex',
      }}>
        {stagesTasks.map((tasks, idx) => (
          <Stage
            stageId={idx}
            key={stagesNames[idx]}
            name={stagesNames[idx]}
            tasks={tasks}
            handleTask={handleTask}
          />
        ))}
      </div>
    </div>
  );
}

Board.propTypes = {
  handleTask: PropTypes.func.isRequired,
  stagesNames: PropTypes.array.isRequired,
  stagesTasks: PropTypes.array.isRequired
}

export default Board;
