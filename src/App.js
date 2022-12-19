import MainPage from "./comp/MainPage";
import Privacy from "./comp/Privacy";
import Terms from "./comp/Terms";
import WhySwipe from "./comp/WhySwipe";
import { BrowserRouter as Router, Routes, Route, Navigate}
    from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
      <Route path='/privacy' element={<Privacy/>} />
      <Route path='/home' element={<MainPage/>} />
      <Route path='/Terms' element={<Terms/>} />
      <Route path='/about' element={<WhySwipe/>} />
    </Routes>
    </Router>
    
  );
}

export default App;




