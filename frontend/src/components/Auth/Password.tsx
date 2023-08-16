import { useNavigate } from "react-router-dom";


const Pass = () => {
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


    return(
        <div className="form">
            <div className='temp'>
                    <label>EDIT PROFILE<br/></label>
                </div>
            <div className="form-body">
                <div className="password">
                    <label className="form__label" htmlFor="password">Password </label>
                    <input  
                        type="password" 
                        name="password"   
                        className="form__input"
                        /*placeholder={data.username}
                        value = {new_data.username}
                        onChange={handleChange}*/
                    />
                </div>
                <div className="n_password">
                    <label className="form__label" htmlFor="n_password">New Password </label>
                    <input  
                        type="password" 
                        name="n_password"   
                        className="form__input"
                        /*placeholder={data.name}
                        value = {new_data.name}
                        onChange={handleChange}*/
                    />
                </div>
                <div className="c_password">
                    <label className="form__label" htmlFor="c_password">Confirm Password </label>
                    <input  
                        type="password" 
                        name="c_password"   
                        className="form__input"
                        /*placeholder={data.birthDate}
                        value = {new_data.birthDate}
                        onChange={handleChange}*/
                    />
                </div>
                
                <div className='register-button'>
                    <button className='form_button' type='submit' onClick={ChangeSubmit}>SAVE</button>
                </div>
          </div>
        </div>      
    );
}

export default Pass;