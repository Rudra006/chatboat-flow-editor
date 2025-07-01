import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { INCREASE_COUNTER } from '../store/action';

function Todo() {
    const[todoList, setTodoList]= useState([]);
    const [formData, setFormData]= useState({
        title:'',
        desc:''
    })

    const dispatch = useDispatch()

    const handelChange = (event)=>{
       const {name, value}= event.target;
        setFormData(prev=>({
            ...prev,
            [name]: value
        }))
    }

    const submitForm = (event) => {
        event.preventDefault();
        if (formData.title.trim() && formData.desc.trim()) {
          setTodoList([...todoList, formData]);
          setFormData({ title: '', desc: '' }); // Clear form after submit
        } else {
          alert("Both fields are required.");
        }
      };
  const deleteTodo= (indexToRemove) =>{
    setTodoList(prev => prev.filter((_, index) => index !== indexToRemove))
  }

const  increaseCounter =()=>{
    console.log("on click called")
    dispatch({ type: INCREASE_COUNTER });
}

  return (
    <div>


        <div>
            <button onClick={increaseCounter} className='bg-amber-700 text-4xl cursor-pointer'>increase</button>
        </div>
        <form onSubmit={submitForm}>

        
        <label name="title" htmlFor='title' className='mx-4'>Title</label>
      <input type='text' name="title" onChange={handelChange} value={formData.title} placeholder='Please add your todo list'></input>
      <label name="title" htmlFor='desc' className='mx-4'>Description</label>
      <input type='text' name="desc" onChange={handelChange} value={formData.desc} placeholder='Please add description'></input>
      <button type='submit'>Add Todo</button>
      </form>
      <h1>All todos are</h1>
        {
           todoList?.map((item, index)=>(
            <div className='border border-red-400 p-4 m-4 rounded shadow'>
            <h1 className='text-lg font-semibold mb-2'>Title: {item?.title}</h1>
            <p className='text-gray-700 mb-2'>Description: {item?.desc}</p>
            <button
              onClick={() => deleteTodo(index)}
              className='bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600'
            >
              Delete Todo
            </button>
          </div>
          
            ))
        }
    </div>
  )
}

export default Todo;
