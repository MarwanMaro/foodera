
import './App.css';
import Home from './Component/Home/Home';
import Navs from './Component/Nav/Navs';
import About from './Component/About/About';
import Best from './Component/Best/Best';
import Explore from './Component/Explore/Explore';
import Review from './Component/Reviews/Reviews';
import Faq from './Component/FAQ/Faq';
import Baked from './Component/Baked/Baked';
import Form from './Component/Form/Form';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <>
    <Navs />
    <div className="body-container" style={{marginTop: "120px"}}>
    <Home  />
    <About />
    <Best  />
    <Explore />
    <Review />
    <Faq />
    <Baked/>
    <Form />
    <Footer />
      </div>
    </>
    
    
  );
}

export default App;
