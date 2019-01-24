import React, { Component } from 'react';
import {Container, Row, Col} from 'react-grid-system';
import axios from 'axios';
import styled from 'styled-components';
import {Tooltip} from 'react-tippy';
import Gitfollowing from './following';
import Gitfollower from './followers';

class Gituser extends Component { 

  render() {
   return(
    <Container>
      <Row>
        <Col sm={8}>
          <Tooltip
          title={this.props.profile.public_repos}
            position="top"
            trigger="mouseenter"
            interia="true"
            >
        <img src={this.props.profile.avatar_url} class="try"/> 
          </Tooltip>
        </Col>
        <Col sm={8}>
        Name:{this.props.profile.name}<br/>        
        Username:{this.props.profile.login}<br/>
        </Col>
      </Row>
      <Row>
      <Col sm={6}>
          <h2>Followers</h2>
         <Gitfollower url={this.props.profile.login} />
      </Col>
      <Col sm={6}>
        <h2>Following </h2>
         <Gitfollowing follow={this.props.profile.login} />       
      </Col>
      </Row>
    </Container>
    
   );
    }
  }





export default Gituser;
