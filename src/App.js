import './App.css';
import Navigation from './components/navigation/Navigation';
import SignIn from './components/signin/signin';
import Register from './components/Register/Register';
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
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn : false,
    }
  }

  calculateFaceLocation = (data) =>{
    const clarifiaFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifiaFace.left_col * width,
      topRow: clarifiaFace.top_Row * height,
      rightCol: width - (clarifiaFace.right_col * width),
      bottomRow: height - (clarifiaFace.button_row * height)
    }
  }

  displayFaceBox = (box) =>{
    console.log(box);
    this.setState({box:box});
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value})
  }

  //this button uses clarifia face detector Api
  onButtonChange = () =>{
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(
      'c0c0ac362b03416da06ab3fa36fb58e3',
      this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err))
     
  }

  onRouteChange =(route)=>{
    this.setState({route: route});
  }

  render(){
    return (
      <div className="App">
        <Particles className='particle'
          params ={particleOptions}
        />
          <Navigation onRouteChange={this.onRouteChange}/>
         { this.state.route === 'home' 
          ? <div>
          <Logo />
          <Rank/>
          <ImageLinkForm onInputChange={this.onInputChange} onButtonChange={this.onButtonChange}/>
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
         </div>
         : (  this.state.route === 'signin'
             ? <SignIn onRouteChange={this.onRouteChange}/> 
             : <Register onRouteChange={this.onRouteChange}/>
           )   
        }
      </div>
    );
  }
  
}

export default App;
