import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import RouterTodo from './component/RouterTodo';
import Navigation from './component/Navigation';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <RouterTodo></RouterTodo>
      </BrowserRouter>
    </div>
  );
}

export default App;
