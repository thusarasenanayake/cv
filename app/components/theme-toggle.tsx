'use client'

import { MoonStars, Spinner, Sun } from '@phosphor-icons/react'

import { useTheme } from 'next-themes'
import { useLoaded } from "../hooks/useLoaded";

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const loaded = useLoaded();

  return (
    <div className='flex justify-end print:hidden'>
      <button
        className="dark:text-slate-400  hover:dark:text-sky-50 text-slate-400 hover:text-sky-800"
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
      >
        {
          !loaded &&
          <div className='w-6 h-6 flex justify-center items-center'>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-100 opacity-70"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-200"></span>
            </span>
          </div>
        }
        {
          loaded && (
            theme === "light" ? <MoonStars size={24} /> : <Sun size={24} />
          )
        }

      </button>
    </div>
  )
}

export default ThemeToggle