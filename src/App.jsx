import { Routes, Route }  from 'react-router-dom'
import Home from './pages/Home'
import { Theme } from './utils/Theme'

function App() {
  
  Theme()
  return (
    <>
     <Routes>
       <Route exact path='/' element={<Home />} />
       <Route exact path='*' element={<Home />} />
     </Routes>
    </>
  )
}

export default App
