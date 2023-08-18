import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../Pages/Layouts/Layout.tsx';
import Home from '../Pages/HomePages/home.tsx';
import LoginPage from '../Pages/AuthPages/LoginPage.tsx'
import RegisterPage from '../Pages/AuthPages/RegisterPage.tsx';
//import Navbar from '../Pages/Layouts/NavBar/index.tsx';
import Access from '../components/Auth/Access.tsx';
import UserPage from '../Pages/AuthPages/UserPage.tsx';
import Edit from '../components/Auth/Edit-Profile.tsx'
import Pass from '../components/Auth/Password.tsx'
import NavBar from '../Pages/Layouts/NavBar/NavBar.tsx';
import StripeMain from '../Pages/Stripe/Stripe.tsx';

function App() {
  return (
    <Router>
      <Layout>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<RegisterPage/>}/>
          <Route path="/login" element= {<LoginPage/>}></Route>
          <Route path="/token" element= {<Access />}></Route>
          <Route path="/profile" element= {<UserPage />}></Route>
          <Route path="/profile/edit" element= {<Edit />}></Route>
          <Route path="/profile/pass" element= {<Pass />}></Route>
          <Route path="/stripe" element= {<StripeMain />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
