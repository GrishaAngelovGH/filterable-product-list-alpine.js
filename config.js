import React from 'jsx-dom'
import App from './App'

const config = () => {
  const root = document.querySelector('#root')
  root.append(<App />)
}

export default config