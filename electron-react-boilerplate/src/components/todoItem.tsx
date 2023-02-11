import React, { useEffect, useState, useCallback } from "react";
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from "antd";
import {CloseOutlined, CheckOutlined} from "@ant-design/icons";
import { Todo } from "../services/todoservice";

interface TodoItemProps {
  todo: Todo;
  onTodoRemoval: (todo:Todo) => void;
  onTodoToggle: (todo:Todo) => void;
}

const TodoItem = ({todo, onTodoRemoval, onTodoToggle}: TodoItemProps) => {
  return (
    <List.Item actions={[
      <Tooltip title = {todo.completed ? 'Mark as completed' : 'Mark as uncompleted'}>
        <Switch checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          onChange={()=> onTodoToggle(todo)}
          defaultChecked={todo.completed}
           />
        </Tooltip>,
        <Popconfirm
        title = "Are you sure you want to delete this todo?"
        onConfirm = {()=> onTodoRemoval(todo)}>
        <Button type="primary" className="remove-todo-button">X</Button>
        </Popconfirm>

    ]}>
      <div className="todo-item">
        <Tag color={todo.completed? 'green' :'red'} className="todo-tag">
          {todo.title}
        </Tag>

      </div>

    </List.Item>
  )
}

export default TodoItem;
