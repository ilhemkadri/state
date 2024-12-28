import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Ilhem Kadri",
        bio: "I am passionate about psychology.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Diploma in Management Science",
      },
      shows: false,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div className="profile">
            <img src={imgSrc} alt="Profile" />
            <h2>{fullName}</h2>
            <p>{profession}</p>
            <p>{bio}</p>
          </div>
        )}
        <div className="time">
          <p>Time since mount: {timeSinceMount} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
