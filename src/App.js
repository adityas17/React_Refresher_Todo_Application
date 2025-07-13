import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Todos } from './components/Todos';
import { useEffect, useState } from 'react';
import AddTodos from './components/AddTodos';

function App() {

  let initTodos;
  if (localStorage.getItem("todos")=== null) {
    initTodos = null;
  }
  else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  function onDelete(todo) {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  function addTodo(title, desc) {
    console.log("I am adding this todo", title, desc);
    let sno;
    if(todos.length === 0) {
      sno = 0;
    }else{
      sno = todos.length + 1;
    }
    const myTodo = {
      id: sno,
      title: title,
      desc: desc
    };
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
      <>
          <div className="container">
            <h1 className="text-center my-4">Todo List</h1>
            <p className="text-center">Manage your tasks efficiently!</p>
            <AddTodos addTodo={addTodo} />
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <Todos todos={todos} onDelete={onDelete} />
              </div>
            </div>
          </div>
    </>
  );
}

export default App;
