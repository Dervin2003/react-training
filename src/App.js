// import logo from './logo.svg';
import './App.css';
// import Head from './Head';
// import MyComponent from './MyComponent';
// import Footer from './Footer';
// import LogIn from './LogIn';
// import LogOut from './LogOut';
// import TestComponent from './TestComponent';
// import StateTest from './StateTest';
// import Events from './Events';
// import Check from './Check';
import TestRoute from './TestRoute';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import About from './About';


// const name="Java Script";

// function Check(){
//   let isLoggedin=true;
//   return(
//     <div>
//       {isLoggedin?<LogIn/>:<LogOut/> }
//     </div>
//   )
  
// }

function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

    //   {/* <h1 >Test React {name}</h1>
    //   <button>click</button> */}

    //   <classComponent/>
    // </div>
    <>
      
      {/* <Head/>

      <MyComponent/>

      <TestComponent/>

      <StateTest/>

      <Check/>

      <Footer/> */}

      {/* <Check/>
      
      <Events/> */}

      <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>

        <Routes>
            <Route path="/" element={<TestRoute/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter> 
    </>
    
  );
}

export default App;
