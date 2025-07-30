import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Books from './Books'

function App() {
  const books = [
    {name: "Physics", price: 320},
    {name: "Chemistry", price: 420},
    {name: "Biology", price: 350},
    {name: "Math", price: 720},
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {
        books.map(book => <Books book={book}></Books>)
      }
      <Student name="Rashik" age="20"></Student>
      <Student name="Rayhan" age="25"></Student>
      <Student name="Tahi" age="25"></Student>
      <Person></Person>
      <Person2></Person2>
      <Student2 name="Albert" age="55"></Student2>
      <Todo></Todo>
    </>
  )
}

function Student(props) {
  // const name = "Rashik";
  // const age = 20;
  return (
    <div className='box'>
      <h2>This is student function</h2>
      <p>My name is {props.name} and i'm {props.age}</p>
    </div>
  )
}
function Student2({ name = "rashik", age = "1" }) {
  return (
    <div className='box'>
      <h2>This is student function</h2>
      <p>My name is {name} and i'm {age}</p>
    </div>
  )
}

function Person() {
  const personStyles = {
    border: '1px solid red',
    borderRadius: '12px',
    padding: '12px',
    margin: '12px'
  }
  return (
    <div style={personStyles}>
      <h2>Writing css into function using a variable</h2>
    </div>
  )
}

function Person2() {
  return (
    <div style={
      {
        border: '1px solid green',
        borderRadius: '12px',
        padding: '12px',
        margin: '12px'
      }
    }>
      <h2>Writing css into function</h2>
    </div>
  )
}

export default App
