import MainPage from "./comp/MainPage";
import Privacy from "./comp/Privacy";
import Terms from "./comp/Terms";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Privacy/>} />
      <Route path='/home' element={<MainPage/>} />
      <Route path='/Terms' element={<Terms/>} />
    </Routes>
    </Router>
    
  );
}

export default App;




