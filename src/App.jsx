import './App.scss'
import "./styles/partials/_variables.scss"
import HomePage from './pages/HomePage/HomePage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import PhotoDetails from './pages/PhotoDetails/PhotoDetails.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/details/:id' element={<PhotoDetails />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
