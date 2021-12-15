import React from 'react';
import TodoTheme from './TodoTheme';

function TodoThemeList({ color, onChangeTheme }) {
    return (
        <div style={{display: 'flex', float: 'right'}}>
            <TodoTheme color="purple" onChangeTheme={onChangeTheme}/>
            {/* <TodoTheme color="blue" onChangeTheme="onChangeTheme"/> */}
            <TodoTheme color="blue" onChangeTheme={onChangeTheme}/>
            <TodoTheme color="gray" onChangeTheme={onChangeTheme}/>
            <TodoTheme color="pink" onChangeTheme={onChangeTheme}/>
        </div>
    );
}

export default TodoThemeList;