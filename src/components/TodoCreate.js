// todo item 생성
import React from 'react';
import styles from './TodoCreate.module.css';
import './TodoCreate.scss';
import classNames from 'classnames';


function TodoCreate({ newTodo, onChange, onCreate, color }) {
    
    console.log('TodoCreate: '+color);
    return (
        <div className={styles.inputDiv}>
            {/* <b className={styles.leftTodo}></b> */}
            <b className={classNames('leftTodo', color)}></b>
            <input 
                className={styles.inputTodo}
                name="newTodo" 
                value={newTodo} 
                onChange={onChange} 
                placeholder="입력해주세요."
            />
            <button 
                className={classNames('inputBtn', color)}
                onClick={onCreate}>
                등록
            </button>
        </div>
    );
}

export default TodoCreate;