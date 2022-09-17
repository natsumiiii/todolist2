import styles from'../styles/components/Todo.module.css';




export const Todo=({title,description,editTodo,deleteTodo,index})=>{
    return(
    <article className={styles.todo}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <button onClick={()=>{deleteTodo(index)}}className={styles.deleteButton}>削除</button>
            <button onClick={()=>{editTodo(index)}} className={styles.editButtom}>編集</button>
            </div>
        </article>
    );
}