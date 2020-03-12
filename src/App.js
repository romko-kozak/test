import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';

const NUM_STAGES = 4;
const FIRST_STAGE = 0;
const LAST_STAGE = 3;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
          { name: 'task 0', stage: 0 },
          { name: 'task 1', stage: 0 },
          { name: 'task 2', stage: 0 },
          { name: 'task 3', stage: 0 },
          { name: 'task 4', stage: 1 },
          { name: 'task 5', stage: 1 },
          { name: 'task 6', stage: 1 },
          { name: 'task 7', stage: 2 },
          { name: 'task 8', stage: 2 },
          { name: 'task 9', stage: 3 },
      ],
      selectedTask: '',
      forwardButtonDisabled: true,
      backButtonDisabled: true
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
  }

  render() {
    const {
      tasks,
      selectedTask,
      forwardButtonDisabled,
      backButtonDisabled
    } = this.state;

    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }

    return (
      <div className="App">
        <Controls
          selectedTask={selectedTask.name || ''}
          forwardButtonDisabled={forwardButtonDisabled}
          backButtonDisabled={backButtonDisabled}
          move={this.move}
        />
        <Board
          stagesTasks={stagesTasks}
          stagesNames={this.stagesNames}
          handleTask={this.handleTask}
        />
      </div>
    );
  }

  handleButton = taskStage => {
    this.setState({forwardButtonDisabled: taskStage === LAST_STAGE ? true : false})
    this.setState({backButtonDisabled: taskStage === FIRST_STAGE ? true : false})
  }

  handleTask = name => {
      const { tasks } = this.state;
      const chosenTask = tasks.find(task => task.name === name);

      this.handleButton(chosenTask.stage);
      this.setState({ selectedTask: chosenTask });
  }

  move = direction => {
    const { selectedTask, tasks } = this.state;
    const chosenTask = tasks.findIndex(task => task.name === selectedTask.name);
    direction ? tasks[chosenTask].stage++ : tasks[chosenTask].stage--;

    this.handleButton(tasks[chosenTask].stage);
    this.setState({ tasks })

  }
}

export default App;
