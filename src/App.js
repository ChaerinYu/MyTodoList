import React, { useState } from 'react';
import styles from './App.module.css';
import classNames from 'classnames/bind';
// import { IoIosClose } from "react-icons/io";
// import { HiEmojiHappy } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import TodoTemplate from './components/TodoTemplate';
import TodoThemeList from './components/TodoThemeList';

const cx = classNames.bind(styles);

function App() {
  const [color, setColor] = useState('purple');
  const onChangeTheme = id => {
    console.log('App.js onChangeTheme');
    setColor(id);
  }

  return (
    // <div className={styles.appBody} color={color}>
    <div className={cx('appBody', {
      [color]: true
    })}>
      <div className={styles.appHeader} color={color}>
        <HiMenu size="35" className={styles.appMenu} />
        <TodoThemeList className={styles.appTheme} onChangeTheme={onChangeTheme} color={color}/>
      </div>
      <TodoTemplate color={color} />
      {/* <IoIosClose size="24" color="#df6888"/>
      <HiEmojiHappy size="24" color="#df6888"/> */}
    </div>
  );
}

export default App;
