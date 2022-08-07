import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import { setUser } from '../reducers/user';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const usersUrl = 'https://my-json-server.typicode.com/fabrinucci/fake_api/users';

  const dispatch = useDispatch();

  const navigate = useNavigate(); 

  const emailField = useRef(null);
  const passwordField = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const email = emailField.current.value;
    const password = passwordField.current.value;

    Axios.get(usersUrl)
      .then( res => {
        const users = res.data;
        const userLogin = users.find( user => user.email === email && user.password === password );

        if(userLogin) {
          dispatch(setUser({
            email: userLogin.email,
            fullname: `${userLogin.first_name} ${userLogin.last_name}`,
            token: Date.now()
          }))
          navigate('/home')
        }

      })


  }

  return (
    <form 
      className='row g-3' 
      onSubmit={ handleSubmit }
    >
      <div className="col-auto">
        <label 
          className="visually-hidden"
        >
          Email
        </label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Your email"
          ref={ emailField }
        />
      </div>
      <div className="col-auto">
        <label 
          className="visually-hidden"
        >
          Password
        </label>
        <input 
          type="password"
          className="form-control" 
          placeholder="Your password"
          ref={ passwordField }
        />
      </div>
      <div className="col-auto">
        <button 
          type="submit" 
          className="btn btn-primary mb-3"
        >
          Confirm identity
        </button>
      </div>
    </form>
  )
}
