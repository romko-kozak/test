import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Controls extends Component {
  render() {
    const {
      selectedTask,
      forwardButtonDisabled,
      backButtonDisabled,
      move
    } = this.props;
    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            placeholder="Selected task name"
            style={{ fontSize: '1rem' }}
            data-testid="selected-task-field"
            value={selectedTask}
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled={backButtonDisabled}
            data-testid="move-back-btn"
            onClick={() => move(0)}
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled={forwardButtonDisabled}
            data-testid="move-forward-btn"
            onClick={() => move(1)}
          >
            Move forward
          </button>
        </div>
      </div>
    )
  }
}

Controls.propTypes = {
  selectedTask: PropTypes.string.isRequired,
  forwardButtonDisabled: PropTypes.bool.isRequired,
  backButtonDisabled: PropTypes.bool.isRequired,
  move: PropTypes.func.isRequired
};

export default Controls;
