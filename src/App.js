import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import IndexPage from './Components/IndexPage/IndexPage';
import GetStartedPage from './Components/GetStartedPage/GetStartedPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<IndexPage/>}/>
            <Route path='/getStartedPage' element={<GetStartedPage/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
