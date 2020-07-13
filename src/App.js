import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WithPinnedTasks } from './components/TaskList.stories';
import { Provider } from 'react-redux';
import InboxScreen from './components/InboxScreen';
import store from './lib/redux';

function App() {
  return (
    <Provider store={store}>
      <InboxScreen/>
    </Provider>
  );
}

export default App;
