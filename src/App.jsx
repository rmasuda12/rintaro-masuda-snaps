import './App.scss'
import "./styles/partials/_variables.scss"
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import PhotoDetails from './pages/PhotoDetails/PhotoDetails.jsx';

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  function filtersClickHandler() {
    setIsFilterOpen(!isFilterOpen);
}
  return (
    <>
      <BrowserRouter>
        <Header filtersClickHandler={filtersClickHandler} isFilterOpen={isFilterOpen}/>
        <Routes>
          <Route path='/' element={<HomePage isFilterOpen={isFilterOpen} />} />
          <Route path='/details/:id' element={<PhotoDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
