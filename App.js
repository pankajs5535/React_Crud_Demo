import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Read from './components/Read';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  return (
    //container is booststrap Class
    <div className="container">
      <Routes>
        <Route exact path='/' element={<Read />}></Route>
        <Route exact path='/create' element={<Create />}></Route>
        <Route exact path='/edit' element={<Edit />}></Route>
      </Routes>
    </div>
  )
}

export default App;
