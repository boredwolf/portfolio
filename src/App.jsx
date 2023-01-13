import React, { useEffect, useState } from "react"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import Timeline from "./components/Timeline"
import appContext from "./Context"
import "./styles/tailwind.css"

function App() {

  const [theme, setTheme] = useState(null)

  const [language, setLanguage] = useState("FR")

  const [botLayer, setBotLayer] = useState("layer-bot")



  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleLanguage = () => {
    setLanguage(language === "EN" ? "FR" : "EN")
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      setBotLayer("layer-bot-dark")

    } else {
      document.documentElement.classList.remove('dark')
      setBotLayer("layer-bot")

    }

  }, [theme])

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  const traductor = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
    </svg>


  )






  return (
    <>
      <appContext.Provider value={{ language, setLanguage }}>
        <button type="button" onClick={handleThemeSwitch} className="fixed p-2 z-10 right-5 top-10 sm:right-10 sm:top-5 bg-violet-300 text-lg p-1 dark:bg-orange-300 rounded-md"> {theme === 'dark' ? sun : moon}</button>
        <button type="button" onClick={handleLanguage} className="fixed p-2 z-10 right-5 top-20 sm:right-20 sm:top-5 bg-violet-300 text-lg p-1 dark:bg-orange-300 rounded-md"> {traductor}</button>
        <div className="dark:text-stone-300 text-stone-900 min-h-screen font-inter relative">
          <div className={`spacer ${botLayer}`}></div>

          <div className="max-w-5xl w-11/12 mx-auto">
            <Intro />
            <Portfolio />
            <Timeline />
            <Contact />
            <Footer />
          </div>
        </div>
      </appContext.Provider>
    </>

  )
}

export default App
