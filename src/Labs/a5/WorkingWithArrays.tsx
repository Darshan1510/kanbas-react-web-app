import axios from "axios";
import { useEffect, useState } from "react";

function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const API = "http://localhost:4000/a5/todos";

  const [todos, setTodos] = useState([] as any);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };

  const removeTodo = async (todo: { id: Number }) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };

  const fetchTodoById = async (id: Number) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (todo: any) => {
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t: any) => t.id !== todo.id));
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  const updateTodo = async () => {
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);

      setTodos(todos.map((t: any) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <input value={todo.id} className="form-control" />
      <br />
      <input
        value={todo.title}
        className="form-control"
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <br />
      <textarea
        value={todo.description}
        className="form-control"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <br />
      <input
        value={todo.due}
        type="date"
        className="form-control"
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
      />
      <br />
      <label className="form-check-label">
        &nbsp;&nbsp;
        <input
          checked={todo.completed}
          value=""
          type="checkbox"
          className="form-check-input"
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
        />
        Completed
      </label>
      <br />
      <br />
      <button onClick={postTodo} className="btn btn-sm btn-warning">
        Post Todo
      </button>
      <br />
      <br />
      <button onClick={updateTodo} className="btn btn-sm btn-success">
        Update Todo
      </button>

      <br />
      <br />
      {errorMessage && <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>}

      <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item border border-1 p-2" key={todo.id}>
            <input checked={todo.completed} type="checkbox" readOnly />
            &nbsp;&nbsp;
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button onClick={() => deleteTodo(todo)} className="btn btn-sm btn-danger">
              Remove
            </button>
            <button onClick={() => fetchTodoById(todo.id)} className="btn btn-sm btn-warning mx-2">
              Edit
            </button>
          </li>
        ))}
      </ul>
      <br />
      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-sm btn-primary">
        Get Todos
      </a>
      <br />
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        value={todo.id}
        className="form-control"
        type="number"
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
      />
      <br />
      <a href={`${API}/${todo.id}`} className="btn btn-sm btn-danger">
        Get Todo by ID
      </a>
      <br />
      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`} className="btn btn-sm btn-primary">
        Get Completed Todos
      </a>
      <br />
      <h3>Creating new Items in an Array</h3>
      <a href={`${API}/create`} className="btn btn-sm btn-primary">
        Create Todo
      </a>
      <br />
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`} className="btn btn-sm btn-primary">
        Delete Todo with ID = {todo.id}
      </a>
      <br />
      <div>
        <div>Todo id: {todo.id}</div>
        <input
          type="text"
          value={todo.title}
          className="form-control"
          onChange={(e) =>
            setTodo({
              ...todo,
              title: e.target.value,
            })
          }
        />
        <h3>Updating an Item in an Array</h3>
        <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-sm btn-primary">
          Update Title to {todo.title}
        </a>
        <br />
        <br />
        <textarea
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          value={todo.description}
          className="form-control"
        />
        <br />
        <a
          href={`${API}/${todo.id}/description/${todo.description}`}
          className="btn btn-sm btn-primary"
        >
          Update Description
        </a>
        <br />
        <input
          type="checkbox"
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
          value=""
          checked={todo.completed}
        />
        &nbsp;
        <label className="">Is todo completed?</label>
        <br />
        <a
          href={`${API}/${todo.id}/completed/${todo.completed}`}
          className="btn btn-primary btn-sm"
        >
          Complete TODO
        </a>
      </div>
    </div>
  );
}
export default WorkingWithArrays;
