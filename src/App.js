import './App.css';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import MainComponents from './components/LandingPage/MainComponents';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Footer/> */}
      <MainComponents/>
    </div>
  );
}

export default App;
