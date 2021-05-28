import React from 'react';
import styles from './App.module.css';
import { IoIosClose } from "react-icons/io";
import { HiEmojiHappy } from "react-icons/hi";
import TodoTemplate from './components/TodoTemplate';


function App() {
  return (
    <div className={styles.appBody}>
      <TodoTemplate></TodoTemplate>
      <IoIosClose size="24" color="#df6888"/>
      <HiEmojiHappy size="24" color="#df6888"/>
    </div>
  );
}

export default App;
