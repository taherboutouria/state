import React from "react";
import './App.css';
import Compteur from "./Compteur";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    fullName: 'Groupe GoMyCode',
    bio: 'My name is Nour Zaied. I am a full stack web developer',
    imgSrc: 'https://c7.alamy.com/comp/2K837X9/web-designer-and-programmer-working-at-desktop-computer-cartoon-woman-coding-in-different-programming-languages-as-java-and-python-female-character-2K837X9.jpg',
    profession: 'Web Developer',
    show: false
  }
 
  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <img src={this.state.imgSrc} alt="failed" />
            <h1>{this.state.profession}</h1>
          </>
        ) : (
          <h1>Show the profile</h1>
        )
        }
        <button onClick={this.handleShow}>{!this.state.show ? "show" : "hide"}</button>
        <>
        <h1>Show the count</h1>
        <Compteur />
        </>
      </div>
    );
  }
}

export default App;