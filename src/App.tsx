import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/organisms/Login';
import Register from './components/organisms/Register';
import Main from './components/organisms/Main';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Main />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
