import React from 'react';
import { HiX, HiCheck, HiStar } from "react-icons/hi";
import styles from './TodoItem.module.css';

function TodoItem({ item, onRemove, onCheckClick, onStarClick }) {
    // check icon
    // const onCheckClick = e => {
    //     console.log('icon click');
    // };

    // star icon
    // const onStarClick = e => {
    //     console.log('star click');
    // };

    // close icon
    // const onCloseClick = e => {
    //     console.log('close click');
    // };

    return (
        <div className={styles.todoItemFullWidth}>
            <HiCheck 
                className={styles.icons} 
                onClick={() => onCheckClick(item.id)}
                style={{
                    'color': item.completed ? '#c92a2a' : '#adb5bd'
                }}
            />
            &nbsp;
            <span
                style={{
                    'textDecoration': item.completed ? 'line-through' : 'none',
                    'color': item.completed ? 'grey' : 'black'
                }}>
                {item.content}
            </span>
            <HiStar 
                className={styles.icons} 
                onClick={() => onStarClick(item.id)}
                style={{
                    'color': item.star ? '#ffd43b' : '#adb5bd'
                }}
            />
            <HiX 
                className={styles.icons} 
                onClick={() => onRemove(item.id)}
            />
        </div>
    );
}

export default TodoItem;