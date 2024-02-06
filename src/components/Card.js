import React from 'react'
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react';

function Card({children}) {
  const {darkMode} = useContext(ThemeContext);
  return (
    <div className={`w-full h-full rounded-md relative p-8 border-2  ${darkMode ? "bg-gray-900 border-2 border-white" : "bg-white border-neutral-200"}`}>
      {children}
    </div>
  )
}

export default Card
