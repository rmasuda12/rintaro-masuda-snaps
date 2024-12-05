import './App.scss'
import "./styles/partials/_variables.scss"
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import PhotoDetails from './pages/PhotoDetails/PhotoDetails.jsx';

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  function filtersClickHandler() {
    setIsFilterOpen(!isFilterOpen);
  }

  const apiKey = "01d304a3-a3a3-494f-9eeb-032594a3b8c2"

  return (
    <>
      <BrowserRouter>
        <Header filtersClickHandler={filtersClickHandler} isFilterOpen={isFilterOpen}/>
        
        <Routes>
          <Route path='/' element={<HomePage isFilterOpen={isFilterOpen} apiKey={apiKey}/>} />
          <Route path='/details/:id' element={<PhotoDetails apiKey={apiKey}/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
