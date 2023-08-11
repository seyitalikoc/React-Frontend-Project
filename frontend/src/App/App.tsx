import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../Pages/Layouts/Layout.tsx';
import Home from '../Pages/HomePages/home.tsx';
import LoginPage from '../Pages/AuthPages/LoginPage.tsx'
import RegisterPage from '../Pages/AuthPages/RegisterPage.tsx';
import Navbar from '../Pages/Layouts/NavBar/index.tsx';
import Access from '../components/Auth/Access.tsx';
import UserPage from '../Pages/AuthPages/UserPage.tsx';


function App() {
  return (
    <Router>
      <Layout>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<RegisterPage/>}/>
          <Route path="/login" element= {<LoginPage/>}></Route>
          <Route path="/token" element= {<Access />} ></Route>
          <Route path="/profile" element= {<UserPage />} ></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
