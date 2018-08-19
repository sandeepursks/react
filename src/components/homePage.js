'use strict';
import React, { Component } from 'react';

class Home extends Component{
  render() {
    return (
      <div className="jumbptron">
        <h1>My Sample Home Page</h1>
        <p>To Understand Simple React Component, add antoher component,use simple router(without router)-YES</p>
        <p>Simple Mock API- to receive data from server(SIMULATION AS IF ITS IS FROM SERVER)-YES</p>
        <p>To Understand React,react router & reducers,polyfill,containers-NO</p>
        <p>Props(immutable) & States(mutable)-NO</p>
        <p>React component lifecycle-NO</p>
        <li>componentWillMount When:Bef react-component renders Why:for app init state setting</li>
        <li>componentDidMount When:aft react component renders Why:access dom,integrate with framework,set timer AJAX REQUESTS </li>
        <li>componentWillReceiveProps When:react component after receiving prop values(not called during initial rencer) Why:set state before render </li>
        <li> shouldComponentUpdate When: Why: </li>
        <li>componentWillUpdate When: Why: </li>
        <li>componentDidUpdate When: Why:</li>
        <li>componentWillUnmount When:react component is removed from dom Why:clean ups </li>
      </div>
    );
  }
}
export default Home;