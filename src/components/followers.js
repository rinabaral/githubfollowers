import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import {Tooltip} from 'react-tippy';

class Gitfollower extends Component {
  // console.log("url-----------------");
  super(props){

  }
  state={
    followers:[]
  };

componentDidMount(){
  console.log("followers")
  const target = this.props.url
  var self= this;
  var uri =  `https://api.github.com/users/${this.props.url}/followers`
  let url = uri + '?client_id=5d15c04c7225012d2d99&client_secret=50aed3475d1040d8439f758e4e4f1f1ec846cdca';
   console.log(url);
   axios.get(url)
      .then(function(resp){
        self.setState({followers: resp.data});
        console.log(self.state.followers)
      })
  }      
  render(){
    return(
      <div class='photo'>
      <Setimgheight />
      {this.state.followers.map(function(follower){
        return(
          <Tooltip
          title={follower.login}
            position="top"
            trigger="mouseenter"
            interia="true"
            >
      <img src={follower.avatar_url} data-tip="hello world" />
          </Tooltip>
          )
      })}
      </div>
      )
  }
 }
const Setimgheight = createGlobalStyle`
  img {
    height:50px;
  }
  .try{
    height:200px!important;
  }
`
export default Gitfollower;

