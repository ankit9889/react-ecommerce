import React, { useState } from 'react';
import '../assets/css/footer.css';

function LoginForm( { Login, error } ) {

    const [ details, setDetails ] = useState( { username: "", password: "" } );

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }



  return (
    
    
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mr-auto ml-auto'>
                    <form onSubmit={submitHandler}>
                        <div className='form-inner'>
                            <h2>Login</h2>
                            {( error !="" ) ? ( <div className="error text-danger"> { error } </div>  ) : ( '' )  }
                            <div className='form-group mt-4'>
                                <label>Username*</label>
                                <input 
                                className='form-control'
                                name='username'
                                type="text"
                                onChange={ e => setDetails({ ...details, username: e.target.value }) }
                                value={details.username}
                                />              
                            </div>
                            <div className='form-group mt-4'>
                                <label>Password*</label>
                                <input 
                                className='form-control'
                                name='password'
                                type="password"
                                onChange={ e => setDetails({ ...details, password: e.target.value }) }
                                value={details.password}
                                />     
                            </div>

                            <button className='btn btn-success mt-4' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
            
  );
}

export default LoginForm;
