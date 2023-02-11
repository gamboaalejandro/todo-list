import React, { useEffect, useState, useCallback } from "react";
import { Tabs, Layout, Row, Col, List } from "antd";
import { Todo } from "../services/todoservice";
import TodoItem from './todoItem';

interface TodoTabProps {
  todos: Todo[];
  onTodoremoval: (todo: Todo) => void;
  onTodoToggle: (todo: Todo) => void;
}

const TodoTab = ({todos, onTodoremoval, onTodoToggle}: TodoTabProps) => {
  return (
    <>
    <List
      locale  = {{emptyText: "No todos"}}
      dataSource = {todos}
      renderItem={(todo: Todo) => (
        <TodoItem
          todo = {todo}
          onTodoRemoval = {onTodoremoval}
          onTodoToggle = {onTodoToggle}
        />
      )}
      pagination= {{
        position : 'bottom',
        pageSize : 5,

      }}
    />
    </>
  );
};

export default TodoTab;
