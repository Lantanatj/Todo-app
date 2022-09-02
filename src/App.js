
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WelcomePage from './pages/WelcomePage';
import Details from './pages/Details';
import Navbar from './pages/Navbar';
import Create from './pages/Create'

function App() {


  return (
    <div>
      <BrowserRouter>
      <Navbar /><br/><br/>
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route exact path="/tasks" element={<Home />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  )


}
export default App;
