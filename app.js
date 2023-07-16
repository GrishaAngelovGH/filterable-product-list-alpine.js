import React from 'jsx-dom'

import Message from './src/components/Message'

const app = () => {
  const root = document.querySelector('#root')

  root.append(<Message />)
}

export default app