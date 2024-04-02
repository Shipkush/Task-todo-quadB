import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form className='flex justify-center items-center py-3 ' onSubmit={handleSubmit}>
      <input className='bg-[#28282B] rounded-md  text-white text-xl w-[550px] py-3 px-2 mt-[70px]' type="text" placeholder='Add Tudu' value={text} onChange={handleChange} />
      <button className='bg-[#28282B] rounded-md text-white text-xl ml-1 px-4 py-3 mt-[70px]' type="submit">+</button>
    </form>
  );
};

export default AddTodo;