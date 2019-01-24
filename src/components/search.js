import axios from 'axios';
import React, {Component} from 'react';
import Gituser from './gituser';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      username: '',
    };

    this.submit = this.submit.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
  }

  changeUsername(event) {
    this.setState({username: event.target.value});
  }

  submit(event) {
    event.preventDefault();
    var self= this;
    let url = 'https://api.github.com/users/' + encodeURI(this.state.username) + '?client_id=5d15c04c7225012d2d99&client_secret=50aed3475d1040d8439f758e4e4f1f1ec846cdca';
   axios.get(url)
      .then(function(resp){
        self.setState({results: resp.data});
      })
  }

  renderGitUser(){
    if (Object.keys(this.state.results).length > 0 && this.state.results.constructor === Object ){
      return <Gituser profile={this.state.results} />
    }
  }


  render() {
    return (
      <div> 
        <form onSubmit={this.submit} >
      <input autofocus type="text" id="username" onChange={this.changeUsername}  />
          <button type="submit">Search</button>
        </form>
        {this.renderGitUser()}
      </div>
    );
  }
}

export default Search;