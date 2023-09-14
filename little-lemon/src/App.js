import './App.css';
import Header from './components/Header';
import Hero from './components/pages/Home/Hero';
import Specials from './components/pages/Home/Specials';
import Testimonials from './components/Testimonials';
import About from './components/pages/Home/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
