import '../../asssets/css/style.css';
import axios from 'axios';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom'

const RegistrationForm = () => {

    const [data, setData] = useState({
        username:"",
        name: "",
        birthDate:"",
        profession:"",
        eMail: "",
        password: "",
        IsActive:"",
        language:""
    });

    const handleChange = (e : any) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
    };

    const handleSubmit = (e : any) => {
        e.preventDefault();
        const userData = {
            username: data.username,
            name: data.name,
            birthDate: data.birthDate,
            profession: data.profession,
            eMail: email,
            password: data.password,
            IsActive: true,
            language: data.language
        };
        axios.post("http://localhost:4000/users/create", userData).then((response) => {
            alert(response.status);
            window.location.assign('/login');
        });
    };

    const email = localStorage.getItem('email');
    
    return(
        <div className="form">
            <div className='temp'>
                    <label>SING UP<br/></label>
                </div>
            <div className="form-body">
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
                <div className="usernames">
                    <label className="form__label" htmlFor="firstName">Name </label>
                    <input  
                        type="text"
                        name="name" 
                        className="form__input" 
                        placeholder="First Name"
                        value = {data.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="birth">
                    <label className="form__label" htmlFor="lastName">Birth Date </label>
                    <input  
                        type="date" 
                        name="birthDate"  
                        className="form__input"
                        placeholder="BirthDate"
                        value = {data.birthDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="profession">
                    <label className="form__label" htmlFor="lastName">Profession </label>
                    <input  
                        type="text" 
                        name="profession"  
                        className="form__input"
                        placeholder="Profession"
                        value = {data.profession}
                        onChange={handleChange}
                    />
                </div>
                <div className="lang">
                    <label className="form__label" htmlFor="language">Language </label>
                    <select value={data.language} onChange={handleChange} name="language">
                        <option value='TR'>TR</option>
                        <option value='EN'>EN</option>
                        <option value='RU'>RU</option>
                    </select>
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input 
                        type="email" 
                        name="eMail" 
                        className="form__input" 
                        value={email!}
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
                    <button className='form_button' type='submit' onClick={handleSubmit}>REGISTER</button>
                </div>
          </div>
        </div>      
    );
}
export default RegistrationForm;