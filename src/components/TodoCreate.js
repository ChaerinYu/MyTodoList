// todo item 생성
import React from 'react';
import styles from './TodoCreate.module.css';

function TodoCreate({ newTodo, onChange, onCreate }) {
    
    return (
        <div className={styles.inputDiv}>
            <b className={styles.leftTodo}></b>
            <input 
                className={styles.inputTodo}
                name="newTodo" 
                value={newTodo} 
                onChange={onChange} 
                placeholder="입력해주세요."
            />
            <button 
                className={styles.inputBtn}
                onClick={onCreate}>
                등록
            </button>
        </div>
    );
}

export default TodoCreate;