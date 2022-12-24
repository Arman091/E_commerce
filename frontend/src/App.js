
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Signup from './components/Signup';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>product listing</h1>}></Route>
          <Route path="/add" element={<h1>Add product</h1>}></Route>
          <Route path="/update" element={<h1>update product</h1>}></Route>
          <Route path="/logout" element={<h1>Logout component</h1>}></Route>
          <Route path="/profile" element={<h1>profile component</h1>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
