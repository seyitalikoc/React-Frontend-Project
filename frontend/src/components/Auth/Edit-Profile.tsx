//import { useState } from 'react';
import '../../asssets/css/style.css';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const navigate = useNavigate();

    /*const [data, setData] = useState({
        username:"",
        name: "",
        birthDate:"",
        profession:"",
        eMail: "",
        password: "",
        IsActive:"",
        language:"",
        id: 0
    });
    
    const handleSubmit = (e : any) => {
        e.preventDefault();
        const user = localStorage.getItem('username')?.replaceAll('"','');
        axios.get("http://localhost:4000/login/find/"+ user).then((response) => {
            setData(response.data);
        });
    };

    //const navigate = useNavigate();
    const [new_data, setNew] = useState({
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
        setNew({
          ...new_data,
          [e.target.name]: value
        });
    };

    const ChangeSubmit = (e:any) => {
        e.preventDefault();
        const id = localStorage.getItem('id');
        axios.patch('http://localhost:4000/users/'+localStorage.getItem('id')).then((response) => {
            setNew(response.data);
        })
    }*/
   
    const ChangeSubmit = () => {
        navigate('/profile');
    }

    const handleSubmit = () => {

    }


    return(
        <div className="form">
            <div className='temp'>
                    <label>EDIT PROFILE<br/></label>
                </div>
            <div className="form-body">
                <div className="usersname">
                    <label className="form__label" htmlFor="lastName">Username </label>
                    <input  
                        type="text" 
                        name="username"   
                        className="form__input"
                        /*placeholder={data.username}
                        value = {new_data.username}
                        onChange={handleChange}*/
                    />
                </div>
                <div className="usernames">
                    <label className="form__label" htmlFor="firstName">Name </label>
                    <input  
                        type="text" 
                        name="name"   
                        className="form__input"
                        /*placeholder={data.name}
                        value = {new_data.name}
                        onChange={handleChange}*/
                    />
                </div>
                <div className="birth">
                    <label className="form__label" htmlFor="lastName">Birth Date </label>
                    <input  
                        type="date" 
                        name="username"   
                        className="form__input"
                        /*placeholder={data.birthDate}
                        value = {new_data.birthDate}
                        onChange={handleChange}*/
                    />
                </div>
                <div className="profession">
                    <label className="form__label" htmlFor="lastName">Profession </label>
                    <input  
                        type="text" 
                        name="profession"   
                        className="form__input"
                        /*placeholder={data.profession}
                        value = {new_data.profession}
                        onChange={handleChange}*/
                    />
                </div>
                <div className="lang">
                    <label className="form__label" htmlFor="language">Language </label>
                    <select /*value={new_data.language} onChange={handleChange}*/ name="language">
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
                        /*placeholder={data.eMail}
                        value = {new_data.eMail}
                        onChange={handleChange}*/
                    />
                </div>
                <div className='register-button'>
                    <button className='form_button' type='submit' onClick={ChangeSubmit}>SAVE</button>
                </div>
                <div className='get_button'>
                    <br/><button className='form_button' type='submit' onClick={handleSubmit}>GET MY DATAS</button>
                </div>
          </div>
        </div>      
    );
}
export default Edit;