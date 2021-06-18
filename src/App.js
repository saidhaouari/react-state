import React from 'react';
import './App.css';
import Avatar from './avatar.png'
class App extends React.Component {
  Person ={
    fullName : 'HAOUARI Said ',
    bio : 'This is my bio',
    imgSrc : Avatar,
    profession :'Web Developer',
  }
  render(){
    return(
      <div className="App">
        <img src={this.Person.imgSrc} alt=''/>
        <h1>{this.Person.fullName}</h1>
        <h2>{this.Person.profession}</h2>
        <p>{this.Person.bio}</p>
        <div></div>
      </div>
    )
  }
}

export default App;
