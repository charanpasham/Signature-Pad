import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignatureCanvas from 'react-signature-canvas'; 

class App extends Component {
  state = {
            image: null}
sigPad = {};
clear = () =>{
  this.sigPad.clear(); 
  this.setState({image: null});
}


trim = () => {
var trimmedDataURL=  this.sigPad.getTrimmedCanvas().toDataURL('image/png');
this.setState({image: trimmedDataURL});

   
}

  render() {
  
    return (
      <div className="App">
      <p>Sign below</p>
       <SignatureCanvas  ref= {(ref) => {this.sigPad = ref}}
        penColor = 'green'        
         canvasProps = {{width: 500, height: 200, className: 'sigCanvas'}}
        />
       <button className ='clearBtn' onClick ={this.clear}>Clear</button>

        <button onClick={this.trim}>
         Generate .png image below
        </button>
       <img className = 'image' src = {this.state.image} alt="image"/>
  

     
      
      </div>
    );
  }
}

export default App;
