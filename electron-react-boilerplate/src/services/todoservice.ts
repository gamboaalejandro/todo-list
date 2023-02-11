const baseUrl = 'http://localhost:3000/todo';

export interface Todo {
  id?: number | string;
  title: string;
  completed: boolean;
}

export const loadTodos = async () => {
  const res = await fetch(baseUrl);
  console.log('refreshing');

  return res.json();
};

export const getTodo = async (id: number | string) => {
  const res = await fetch(`${baseUrl}/${id}`);
  return await res.json();
};

export const createTodo = async (todo: Todo) => {
  const res = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      title: todo.title,
      completed: todo.completed,
    }),
  });
  return await res.json();
};

export const updateTodo = async ( todo: Todo) => {
  const res = await fetch(`${baseUrl}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    }),
  });
  return await res.json();
};

export const deleteTodo = async (id: number | string | undefined) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
