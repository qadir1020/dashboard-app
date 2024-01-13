import './App.css';
import Login from './components/Login';
import Login2 from './components/Login2';
import Login3 from './components/Login3';
import SideBar from './components/shared/SideBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Layout from './components/shared/Layout';
import Products from './components/Products';

function App() {
  return (
    <div>
      {/* <Login />
      <Login2/>
      <Login3 /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='/products' element={<Products />} />
          </Route>
          <Route path='/login' element={<div>Login Page</div>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
