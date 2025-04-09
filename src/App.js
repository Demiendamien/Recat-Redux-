import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTask from './component/Addtask'; // Correction du chemin
import TaskList from './component/ListeTask'; // Correction du chemin

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo Application</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
