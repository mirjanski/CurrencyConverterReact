import Navbar from './components/Navbar';
import Header from './components/Header';
import Converter from './components/Converter';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Converter />
      <About />
      <Contact />
      <div className="bg"></div>
    </>
  );
}

export default App;