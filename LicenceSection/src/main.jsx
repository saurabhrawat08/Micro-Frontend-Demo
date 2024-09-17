import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import License from './License.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <License />
  </StrictMode>,
)
