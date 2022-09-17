import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Todo } from '../components/todo';
import styles from '../styles/Home.module.css'


export default function Home() {
  const [todos, setTodos] = useState([]);
  const [purpose,setPurpose]=useState('');
  const [description,setDescription]=useState('');
  const [editIndex,setEditIndex] = useState(-1);

  const formSubmitHandler = (e)=>{
    e.preventDefault();
    if(editIndex == -1){
    setTodos([
      ...todos,
      {
        title:purpose,
        description:description
    }
  ]);
  setPurpose('');
  setDescription('');
  return;
  }
  const tmpTodos = todos;
  tmpTodos[editIndex].title=purpose;
  tmpTodos[editIndex].description=description;
  setTodos(tmpTodos);
  setPurpose('');
  setDescription('');
  setEditIndex(-1);
  }
  const purposeChangeHandler = (e)=>{
    setPurpose(e.target.value);
  }
  const descriptionChangeHandler = (e)=>{
    setDescription(e.target.value)
  }
  const editTodo = (editIndex)=>{
    setPurpose(todos[editIndex].title);
    setDescription(todos[editIndex].description);
    setEditIndex(editIndex);
  }
  const deleteTodo=(deleteIndex)=>{
    setTodos(
      todos.filter((todos,index)=> index !== deleteIndex)
    );
  }
  return (
    <>
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={styles.inputForm}>
        <label className={styles.label}>目標</label>
        <input className={styles.input} type="text" onChange={purposeChangeHandler} value={purpose}></input>
      </div>
      <div className={styles.form}>
        <label className={styles.label}>説明</label>
        <textarea className={styles.input} onChange={descriptionChangeHandler} value={description}></textarea>
      </div>
      <input type="submit" className={styles.sybmit} value={editIndex == -1 ? '追加' : '更新'}/>
    </form>
    {
      todos.map((todo,index) => (
        <Todo
        title={todo.title}
        description={todo.description}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        index={index}
        key={index}
        />
      ))
    }
    </>
  );
}
