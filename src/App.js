import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'; 
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  render(){
    return(
      <div className="App">
        
        <Counter />
        {/* <Message />  */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>
            This is children props.
          </p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Women"></Greet>
        <Welcome name="Bruce" heroName="Batman"/> 
        <Welcome name="Clark" heroName="Superman"/> 
        <Welcome name="Diana" heroName="Wonder Women"/>  */}


        {/* <Hello>  </Hello> */}

      </div>
  
    );
  }
}

export default App;
