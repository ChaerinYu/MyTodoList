import React from 'react';
import styles from './TodoHeader.module.css';

function TodoHeader() {
    return (
        <table className={styles.headerTable}>
            <tbody>
                <tr className={styles.headerRow}>
                    <td><h1>[</h1></td>
                    <td className={styles.headerContent}><h1>My To-Do List</h1></td>
                    <td><h1>]</h1></td>
                </tr>
            </tbody>
        </table>
    );
}

export default TodoHeader;