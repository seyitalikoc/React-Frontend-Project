import { useState } from "react";
import axios from 'axios';

const Access = () => {
    const [access, setAccess] = useState(localStorage.getItem('access_token'));

    var refresh = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'authorization': '',
            'Content-Type': 'application/json',
            'Origin': '',
            'Host': 'api.producthunt.com'
        },
        body: JSON.stringify({
            'client_id': '(API KEY)',
            'client_secret': '(API SECRET)',
            'grant_type': 'client_credentials'
          })
    };

    const handleChange = (e : any) => {
        const value = e.target.value;
        refresh.headers.authorization = 'Bearer '+ value;
    };

    const handleSubmit = (e : any) => {
        try{
            e.preventDefault();
            axios.post("http://localhost:4000/login/refresh", refresh).then((response) => {
                //alert(response.statusText);
                if(response.data['access_token'] !== null){
                    setAccess(response.data['access_token']);
                }else{
                    alert('ERRÖR!!')
                }
            })
        }catch(error){  
        }
    };
    return (
        <div className="form">
            <div className="form-body">
                <div className='temp'>
                    <label>ACCESS TOKEN TAKEN AND REFRESH<br/></label>
                </div>
                <div className="token">
                    <label className="form__label" htmlFor="Token">Token </label>
                    <input
                        type="text" 
                        name="token"   
                        placeholder="Token"
                        maxLength={500}
                        onChange={handleChange}
                    />
                </div>
                <div className='refresh-button'>
                    <button className='form_button' type='submit' onClick={handleSubmit} >REFRESH</button>
                </div>
            </div>
            <div className='form-body'>
                <label htmlFor="access_token">Access Token:  {access}<br/></label>
                <label htmlFor="refresh_token">Refresh Token: {localStorage.getItem("refresh_token")}</label>
            </div>
        </div>
    )
}

export default Access;