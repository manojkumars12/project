import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import ColorPalette from './components/ColorPalette'
import { RecoilRoot } from 'recoil'
function App() {

  return (
    <div>
    <RecoilRoot>
    <ColorPalette />
    </RecoilRoot>
    </div>
  )
}

export default App
