import React from 'react';
import styles from './App.module.css';
import TodoTemplate from './components/TodoTemplate';


function App() {
  return (
    <div className={styles.appBody}>
      <TodoTemplate></TodoTemplate>
    </div>
  );
}

export default App;
