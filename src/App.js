import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';


const particleOptions = {
  particles: {
    numbers: {
      value: 30,
      density: {
        enable:true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particle'
        params ={particleOptions}
      />
       <Navigation />
       <Logo />
       <Rank/>
       <ImageLinkForm />
       {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
