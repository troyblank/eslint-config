import React from 'react'
import { createRoot } from "react-dom/client"
import Simple from './components/simple'

const { render } = createRoot(document.querySelector('#main'))

render(<Simple />)
