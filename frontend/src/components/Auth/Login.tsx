import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const _Login = () => {
    const navigate = useNavigate(); // sayfa yönlendirme
    const [data, setData] = useState({
        username:"",
        password: ""
    });

    const handleChange = (e : any) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
    };

    const handleSubmit = (e : any) => {
        try{
            e.preventDefault();
            const userData = {
                username: data.username,
                password: data.password
            };
            axios.post("http://localhost:4000/login", userData).then((response) => {
                localStorage.setItem("username", JSON.stringify(userData.username));
                localStorage.setItem("access_token", JSON.stringify(response.data['access_token'].toString()));
                localStorage.setItem("refresh_token", JSON.stringify(response.data['refresh_token'].toString()));
                localStorage.setItem("logincontrol", "true");
                localStorage.setItem("id",response.data['id']);
                navigate('/');
                window.location.reload();
                
            })
            
        }catch(error){  
        }
    };
    return(
        <div className="form">
            <div className="form-body">
                <div className='temp'>
                    <label>LOGIN<br/></label>
                </div>
                <div className="usersname">
                    <label className="form__label" htmlFor="lastName">Username </label>
                    <input  
                        type="text" 
                        name="username"   
                        className="form__input"
                        placeholder="UserName"
                        value = {data.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Password </label>
                    <input 
                        className="form__input" 
                        type="password"  
                        name="password" 
                        placeholder="Password"
                        value = {data.password}
                        onChange={handleChange}
                    />
                </div>
                <div className='register-button'>
                    <button className='form_button' type='submit' onClick={handleSubmit}>LOGIN</button>
                </div>
            </div>
        </div>      
    )
}
export default _Login;

//<button className='form_button' type='submit' onClick={handleSubmit} href >LOGIN</button>