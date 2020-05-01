import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// const App = () => (
//   <div>
//     <p>Hello world</p>
//   </div>
// )

// const App = () => {
//   console.log('Hello from component')
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

const Hello = ({ name, age }) => {
  // console.log(check if name can be changed or its a const)  
  // const name = props.name
  // const age = props.age 
  // const { name, age } = props 
  const bornYear = () => new Date().getFullYear() - age 

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

// const Footer = () => {
//   return (
//     <div>
//       Greeting app created
//     </div>
//   )
// }

const App = (props) => {
  const [ counter, setCounter ] = useState(0)   //destructuing 

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  // const handleClick = () => {
  //   console.log('clicked')
  // }

  console.log('rendering...', counter)
  // const name = "Peter"
  // const age = 10
  // console.log(name, age)
  // return (
  //     <>
  //       <h1>Greetings</h1>
  //       <Hello name="Danish" age={16 + 10} />
  //       <Hello name={name} age={age} />
  //       {/* <Footer /> */}
  //     </>
  // )
  // const {counter} = props 
  return (
    <>
    <div>{counter}</div>
    <button onClick={() => setCounter(counter + 1)}>
      plus
    </button>
    <button onClick={() => setCounter(0)}>     {/*Resetting counter */}
      zero
    </button>
    </ >
  )
}

// let counter = 1

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }

// const refresh = () => {
ReactDOM.render(
  <App /* counter={counter} */ />,
  document.getElementById('root')
  )
// }

// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)

// refresh()
// counter += 1
// refresh()
// counter += 1
// refresh()


