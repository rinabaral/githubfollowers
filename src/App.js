import React, { Component } from 'react';
// import {Container, Row, Col} from 'react-grid-system';
import axios from 'axios';

class App extends Component {
 state={ profile:{} };

  componentDidMount() {
    var self = this;
    axios
      .get("https://api.github.com/users/Username?client_id=5d15c04c7225012d2d99&client_secret=50aed3475d1040d8439f758e4e4f1f1ec846cdca")
      .then(function(resp) {
        self.setState({
          profile: resp.data
        });
          console.log(resp.data);
      })
  }
  }
  var name = { }
    const URL = "https://api.github.com/users/" + name + "?secret keys";
    get (url)

export default App;

