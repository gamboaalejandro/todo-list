import React, { useEffect, useState, useCallback } from "react";
import { Tabs, Layout, Row, Col, Input, message, } from "antd";
import './todoList.css';
import TodoTab from './todoTab';
import TodoForm from './todoForm';
import {
  createTodo,
  updateTodo,
  deleteTodo,
  loadTodos,
  Todo
} from '../services/todoservice';

const {TabPane} = Tabs;

const {Content} = Layout;



export const TodoList = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [Activetodo, setActivetodo] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleFormSubmit =  (todo: Todo) => {
      createTodo(todo).then(()=> onRefresh());
      message.success('Todo created successfully');
  };
  const handleRemoveTodo = (todo: Todo) => {
    deleteTodo(todo.id).then(()=> onRefresh());
    message.success('Todo deleted successfully');

  }

  const handleToggleTodoStatus = (todo: Todo) => {
    todo.completed = !todo.completed;
    updateTodo(todo).then(()=> onRefresh());
    message.info('Todo status updated successfully');

  }

  const refresh = async () => {
    console.log('refreshing222');
    loadTodos().then((todos) => {
      setTodos(todos);
      setActivetodo(todos.filter((todo:Todo) => todo.completed === false));
      setCompletedTodos(todos.filter((todo:Todo) => todo.completed === true));
    }).catch((error) => {
      console.error(error.message);
    });
    };

    const onRefresh = useCallback(async () => {
      setRefreshing(true);
      const data = await loadTodos();
      setTodos(data);
      setActivetodo(data.filter((todo:Todo) => !todo.completed));
      setCompletedTodos(data.filter((todo:Todo) => todo.completed));
      setRefreshing(false);
    }, [refreshing]);

    useEffect(() => {
      refresh();
    }, [onRefresh]);


  return (
  <Layout className="layout">
    <Content style={{padding: '0 50px'}}>
    <div className="todoList">
      <Row>
        <Col span={14} offset={5}>
          <h1>Todo list Project</h1>
          <TodoForm onformsubmit={handleFormSubmit} />
          <br/>
          <Tabs defaultActiveKey="all">
            <TabPane tab="All" key="all">
              <TodoTab
              todos={todos}
              onTodoremoval={handleRemoveTodo}
              onTodoToggle={handleToggleTodoStatus} />

            </TabPane>
            <TabPane tab="Active" key="active">
              <TodoTab
              todos={Activetodo}
              onTodoremoval={handleRemoveTodo}
              onTodoToggle={handleToggleTodoStatus} />
            </TabPane>
            <TabPane tab="Completed" key="completed">
              <TodoTab
              todos={completedTodos}
              onTodoremoval={handleRemoveTodo}
              onTodoToggle={handleToggleTodoStatus} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>

    </Content>
  </Layout>
  )
  }


export default TodoList;


