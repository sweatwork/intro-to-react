import React from 'react';
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

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greeting app created
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10
  console.log(name, age)
  return (
      <>
        <h1>Greetings</h1>
        <Hello name="Danish" age={16 + 10} />
        <Hello name={name} age={age} />
        <Footer />
      </>
  )
}

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


ReactDOM.render(
  <App />,
  document.getElementById('root')
)


