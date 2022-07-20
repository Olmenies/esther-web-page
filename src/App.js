import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import IndexPage from './Components/IndexPage/IndexPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <IndexPage/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
