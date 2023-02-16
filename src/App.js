import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Detail from './pages/Detail.js';
import Main from './pages/Main';


function App() {
  

  return (
    <Routes>
    <Route path='/' element={<Main/>}></Route>
    <Route path={'/detail/:id'} element={<Detail></Detail> }>

    </Route>
    <Route path='*' element={<div>없는페이지에요</div>}/>  
    </Routes> 
  )
  
}


export default App;
