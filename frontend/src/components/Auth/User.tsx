import { useState } from 'react';
import '../../asssets/css/style.css';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();

    const routeChange = () =>{ 
        let path = `/profile/edit`; 
        navigate(path);
    }

    const routeChange2 = () =>{ 
        let path = `/profile/pass`; 
        navigate(path);
    }

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
    
    return(
        <div className="form">
            <div className='temp'>
                    <label>{data.name.toUpperCase()}'S PROFILE<br/></label>
                </div>
            <div className="form-body">
                <div className="usersname">
                    <label className="form__label" htmlFor="lastName">Username </label>
                    <label>{data.username}<br/></label>
                </div>
                <div className="usernames">
                    <label className="form__label" htmlFor="firstName">Name </label>
                    <label>{data.name}<br/></label>
                </div>
                <div className="birth">
                    <label className="form__label" htmlFor="lastName">Birth Date </label>
                    <label>{data.birthDate}<br/></label>
                </div>
                <div className="profession">
                    <label className="form__label" htmlFor="lastName">Profession </label>
                    <label>{data.profession}<br/></label>
                </div>
                <div className="lang">
                    <label className="form__label" htmlFor="language">Language </label>
                    <label>{data.language}<br/></label>
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <label>{data.eMail}<br/></label>
                </div>
                <div className='register-button'>
                    <button className='form_button' type='submit' onClick={routeChange}>Edit Profile</button>
                    <br/><br/><button className='form_button' type='submit' onClick={routeChange2}>Change Password</button>
                </div>
          </div>
        </div>      
    );
}
export default User;