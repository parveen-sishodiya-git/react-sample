import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/************************************************************************ */
/*************************SIMPLE ELEMENT CREATION**************************/
/************************************************************************ */

//JSX Element - JavaScript Extension ****** START
/*
  When we use JSX elements as defined below, when we will execute this it will first convert JSX elements into plain java script elements
  with the help of babbel compiler. 
*/
const jsxElementFirst = <h1> Hello, I am <i><b>JSX <span className="firstJSX">First</span> Element</b></i></h1>;
ReactDOM.render(jsxElementFirst, document.getElementById('component1'));

const jsxElementSecond = <h1> Hello, I am <i><b>JSX <span className="secondJSX">Second</span> Element</b></i></h1>;
ReactDOM.render(jsxElementSecond, document.getElementById('component2'));

const jsxBothSecFirst =
  <span>
    <h1> Hello, I am <i><b>JSX <span className="firstJSX">First</span> Element</b></i></h1>
    <h1> Hello, I am <i><b>JSX <span className="secondJSX">Second</span> Element</b></i></h1>
  </span>;
ReactDOM.render(jsxBothSecFirst, document.getElementById('component3'));
//JSX Element - JavaScript Extension ****** END

//React Element --- START
/*
This element we created with React createElement API, This will not convert into plain javascript because this is 
already in plain javascript
*/
const reactChildElement = React.createElement("span", { className: "secondJSX" }, "child React");
ReactDOM.render(reactChildElement, document.getElementById('component4'));
const reactFirstElement = React.createElement("h2", null, "Hello, I am ", reactChildElement, " Element");
ReactDOM.render(reactFirstElement, document.getElementById('component5'));
//React Element --- END

/************************************************************************ */
/*************************REACT COMPONENT CREATION**************************/
/************************************************************************ */

//Function Components

var EmployeeComponent = (employee) => {
  return <span>
    <h2>Hello i am employee function component !!! </h2>
    <h1>Employee Name : {employee.name}</h1>
    <h1>Employee Domain : {employee.domain}</h1>
    <h1>Employee Company : {employee.Company}</h1>
    <h1>Employee Salary : {employee.Salary}</h1>
    <EmployeeDeptComponent deptHead={employee.deptHead} deptname={employee.deptname}></EmployeeDeptComponent>
  </span>;
}

var EmployeeDeptComponent = (department) => {
  return <span>
    <h2>Hello i am department function component !!! </h2>
    <h1>Employee Department Domain : {department.deptHead}</h1>
    <h1>Employee Department Head : {department.deptHead}</h1>
  </span>;
}


const firstReactComponent = <EmployeeComponent name="sushil" Company="GENPECT" Salary="32000" deptname="IT" deptHead="Harish"></EmployeeComponent>;

ReactDOM.render(firstReactComponent, document.getElementById("component6"));

//Class components
class Student extends React.Component {
  render() {
    return <span>
      <p>Hello i am from class component</p>
      <h2>Employee name : {this.props.name}</h2>
      <h2>Employee name : {this.props.sclass}</h2>
      <StudentParents pname={this.props.pname}></StudentParents>
    </span>;
  }

}

class StudentParents extends React.Component {
  render() {
    return <span>
      <p>Hello i am from class component</p>
      <h2>Employee Parent name : {this.props.pname}</h2>
    </span>;
  }

}

const studentElement = <Student name="Satish" sclass="12th" pname="Raju"></Student>
ReactDOM.render(studentElement, document.getElementById("component7"));

//component 7
//Component State

class Counter extends React.Component {
  state = {
    number: 1
  };


  increaseNumber = () => {
    this.setState({ number: this.state.number + 1 });
  }

  decreaseNumber = () => {
    if (this.state.number > 1)
      this.setState({ number: this.state.number - 1 });
  }

  render() {
    return <span>
      <h2>Hello, Please set the quantity you want to checkout!!!</h2>
      <h1><b>Quantity is : {this.state.number} Kg</b></h1>
      <button onClick={this.increaseNumber}>Add</button>
      <button onClick={this.decreaseNumber}>Delete</button>
    </span>;
  }
}

const countElement = <Counter></Counter>
ReactDOM.render(countElement, document.getElementById("component8"));

//component 9
//message character count

class CharacterCount extends React.Component {
  state = {
    message: '',
    maxCharacter:50
  };

  giveMessage(text) {
    this.setState({ maxCharacter: 50 - text.length});
  }

  render() {
    return <span>
      <p>{this.state.maxCharacter} character are remaining</p>
      <label>Message : </label><input type="text" onChange={e => this.giveMessage(e.target.value)}></input>
    </span>
  }
}

const messageELE = <CharacterCount></CharacterCount>
ReactDOM.render(messageELE,document.getElementById("component9"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
