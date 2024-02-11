import React from 'react'
import { useEffect } from "react";
import { useState } from "react";

export default function DarkBtn() {
const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
  localStorage.setItem('color-theme', isDarkMode ? 'dark' : 'light');
  };
  useEffect(() => {
  const html = document.querySelector('html');
  html.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);
  return (
    <div>
         <div onClick={toggleDarkMode} >
         <svg className='text-white dark:text-pink-600 hover:scale-105 transition' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Zm0 6q.675 0 1.3-.125t1.2-.4q-1.575-.725-2.538-2.175T11 12q0-1.85.963-3.3T14.5 6.525q-.575-.275-1.2-.4T12 6Q9.5 6 7.75 7.738T6 12q0 2.5 1.75 4.25T12 18Z"/></svg>
         </div>
    </div>
  )
}
