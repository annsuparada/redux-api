import React from 'react';

import UsersList from './components/UsersList';
import PostsList from './components/PostsList';
import './App.css';
import { Flex } from './components/style'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <UsersList />
    </div>
  );
}

export default App;
