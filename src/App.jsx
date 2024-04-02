import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Provider store={store}>
       <h1 className='bg-[#28282B] h-[70px] text-white text-3xl font-bold flex justify-start items-center px-2'>TuDu</h1>
      <div className="App bg-[#0b0c0d] h-screen items-center">
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;