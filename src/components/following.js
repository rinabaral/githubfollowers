import React, { Component } from 'react';
import axios from 'axios';
import {
  Tooltip,
} from 'react-tippy';

class Gitfollowing extends Component {
  super(props){

  }
  state={
    following:[]
  }

componentDidMount(){
  console.log("following")
  const target = this.props.follow
  var self= this;
  var uri =  `https://api.github.com/users/${this.props.follow}/following`
  let url = uri + '?client_id=5d15c04c7225012d2d99&client_secret=50aed3475d1040d8439f758e4e4f1f1ec846cdca';
   console.log(url);
   axios.get(url)
      .then(function(resp){
        self.setState({following: resp.data});
        console.log(self.props.follow)
        console.log(self.state.following)
      })
  }      
  render(){
    return(
      <div>
      {this.state.following.map(function(follow){
        return(
              <Tooltip
              title={follow.login}
                position="top"
                trigger="mouseenter"
                interia="true"
                >
          <img src={follow.avatar_url} data-tip="hello world" />
              </Tooltip>
          )
      })}
      </div>
      )
  }
 }

export default Gitfollowing;

