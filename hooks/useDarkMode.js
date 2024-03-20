import { useState, useEffect } from 'react'

export default function useDarkMode() {
  // Define constants
  const STROAGE_NAME = 'color-theme'
  const DARK_THEME_CLASS_NAME = 'dark'
  const LIGHT_THEME_CLASS_NAME = 'light'
  const DEFAULT_THEME_CLASS_NAME = LIGHT_THEME_CLASS_NAME

  // Create state
  const [isEnabled, setIsEnabled] = useState(DEFAULT_THEME_CLASS_NAME)

  // Once page gets rendered, get theme from stroage
  useEffect(() => {
    const themeFromStroage = window.localStorage.getItem(STROAGE_NAME)
    setIsEnabled(themeFromStroage === DARK_THEME_CLASS_NAME)
  }, [])

  // Fire off an effect that adds/removes dark mode class and handles local stroage
  useEffect(() => {
    const element = window.document.documentElement
    if (isEnabled) {
      localStorage.setItem(STROAGE_NAME, DARK_THEME_CLASS_NAME)
      element.classList.add(DARK_THEME_CLASS_NAME)
    } else {
      localStorage.setItem(STROAGE_NAME, LIGHT_THEME_CLASS_NAME)
      element.classList.remove(DARK_THEME_CLASS_NAME)
    }
  }, [isEnabled])

  // Return isEnabled state and setter
  return [isEnabled, setIsEnabled]
}
