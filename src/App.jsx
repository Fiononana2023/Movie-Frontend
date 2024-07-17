
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Genres from './components/Genres'


function App() {  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Genres />}/>
      </Routes>
      
    </>
  )
}

export default App
