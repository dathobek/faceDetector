import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecog/FaceRecognition ';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import { Component } from 'react';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'df35e99d9fbc464ba1b68d69f176278f'
 });

const particleOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable:true,
        value_area: 800
      }
    }
  }
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value})
  }

  onButtonChange = () =>{
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(
      function(response){
        console.log(response);
      },
      function(err){
        //there was an error
      }
    );

  }

  render(){
    return (
      <div className="App">
        <Particles className='particle'
          params ={particleOptions}
        />
         <Navigation />
         <Logo />
         <Rank/>
         <ImageLinkForm onInputChange={this.onInputChange} onButtonChange={this.onButtonChange}/>
         <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
  
}

export default App;
