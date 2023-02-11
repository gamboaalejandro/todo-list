import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Button} from 'antd'
import './App.css';
import TodoList from '../components/todoList';

function Hello() {
  return (
    <div>
      <Button type='primary'>Hello</Button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

