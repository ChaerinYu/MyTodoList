import React from 'react';
import classNames from 'classnames';
import './TodoTheme.scss';
import { GiPlainCircle } from "react-icons/gi";

export const ThemeColor = React.createContext('purple');

function TodoTheme({children, color, onChangeTheme}) {
    return (
        <ThemeColor.Provider value={color}>
            <GiPlainCircle 
                className={classNames('Theme', color)} 
                id={color} 
                onClick={() => onChangeTheme(color)} />
        </ThemeColor.Provider>
    );
}

TodoTheme.defaultProps = {
    color: 'purple'
};

export default TodoTheme;