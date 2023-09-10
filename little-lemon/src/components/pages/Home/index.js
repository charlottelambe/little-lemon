import Header from '../../Header';
import Nav from '../../Nav';
import Main from '../../Main';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from '../../Testimonials';
import About from './About';
import Footer from '../../Footer';

const Home = () =>  {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default Home;
