
// // import { BrowserRouter, Route, Routes} from 'react-router-dom';
// // import './App.css';
// // import { Main } from './Components/Main';
// // import { Subjects } from './Components/Subjects';
// // import { Home} from './Components/Home';
// // import { Guidelines } from './Components/Guidelines';
// // import { Login } from './Components/Login';
// // import { Updates } from './Components/Updates';
// // import { Gk } from './Components/Gk';

// // function App() {
// //   return (
// //       <BrowserRouter>
// //       <Routes>
// //         <Route path='./' element={<Main/>}/>
// //         <Route path='/home' element={<Home/>}/>
// //         <Route path='/subjects' element={<Subjects/>}/>
// //         <Route path='/guidelines' element={<Guidelines/>}/>
// //         <Route path='/updates' element={<Updates/>}/>
// //         <Route path='/gk' element={<Gk/>}/>
// //         <Route path='/login' element={<Login/>}/>
// //       </Routes>
// //       </BrowserRouter>
// //   );
// // }

// // export default App;










// import './App.css';
// import React from 'react';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import { Main } from './Components/Main';
// import { Subjects } from './Components/Subjects';
// import { Guidelines } from './Components/Guidelines';
// import { Login } from './Components/Login';
// import { Updates } from './Components/Updates';
// import { Gk } from './Components/Gk';



// function App() {
//   return (
//     <>
//     <Router>
      
//       <Routes>
//         <Route path='/' element={<Main/>}/>
//         <Route path='/subjects' element={<Subjects/>}/>
//         <Route path='/guidelines' element={<Guidelines/>}/>
//         <Route path='/updates' element={<Updates/>}/>
//         <Route path='/gk' element={<Gk/>}/>
//         <Route path='/login' element={<Login/>}/>
        
//       </Routes>
//     </Router>
//     </>
//   );
// }

// export default App;





// import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import './App.css';
// import { Main } from './Components/Main';
// import { Subjects } from './Components/Subjects';
// import { Home} from './Components/Home';
// import { Guidelines } from './Components/Guidelines';
// import { Login } from './Components/Login';
// import { Updates } from './Components/Updates';
// import { Gk } from './Components/Gk';

// function App() {
//   return (
//       <BrowserRouter>
//       <Routes>
//         <Route path='./' element={<Main/>}/>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/subjects' element={<Subjects/>}/>
//         <Route path='/guidelines' element={<Guidelines/>}/>
//         <Route path='/updates' element={<Updates/>}/>
//         <Route path='/gk' element={<Gk/>}/>
//         <Route path='/login' element={<Login/>}/>
//       </Routes>
//       </BrowserRouter>
//   );
// }

// export default App;









// import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Main } from './Components/Main';
import { Class } from './Components/Class';
import { Guidelines } from './Components/Guidelines';
import { Login } from './Components/Login';
import { Updates } from './Components/Updates';
import { Gk } from './Components/Gk';




function App() {
  return (
    <>
    
    <Router>
      
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/class' element={<Class/>}/>
        <Route path='/guidelines' element={<Guidelines/>}/>
        <Route path='/updates' element={<Updates/>}/>
        <Route path='/gk' element={<Gk/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </>
  
  );
}

export default App;