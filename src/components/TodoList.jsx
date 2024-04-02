import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <ul className=''>
      {todos.map(todo => (
       <div className='flex justify-center items-center mt-2'>
        <div className='w-[400px] '>
          <li className='flex justify-between items-center mt-3 text-white' key={todo.id}>
           <div> <input className='mr-2' onChange={(checkbox) =>{
              isChecked()
           }} type='checkbox' />
            {todo.text}</div>
           <div>
           <button className='bg-[#28282B] px-4 py-1 rounded-lg hover:bg-red-400' onClick={() => handleDelete(todo.id)}>Delete</button>
           </div>
            
          </li>
        </div>
     </div>
))}
    </ul>
  );
};

export default TodoList;