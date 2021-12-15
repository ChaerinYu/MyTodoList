import React from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

function TodoList({ items, onRemove, onCheckClick, onStarClick }) {
    return (
        <div>
            <ul className={styles.itemList}>
                {items.map(item => (
                    <li className={styles.item} key={item.id}>
                        <TodoItem 
                            item={item} key={item.id} 
                            onRemove={onRemove} 
                            onCheckClick={onCheckClick} 
                            onStarClick={onStarClick}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;