import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Salutation from './Greeting.jsx'
import { DisplayChocotorta } from './Chocotorta.jsx'
import './index.css'
import App from './Animals.jsx'
import Buttons from './Buttons.jsx'
import PackingList from './Packed.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DisplayChocotorta />
    <Salutation />
    <App />
    <PackingList />
    <Buttons />
  </StrictMode>,
)
