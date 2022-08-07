import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ProductsList } from '../components';
import { unsetUser } from '../reducers/user';

export const Home = () => {

  const usersProducts = 'https://my-json-server.typicode.com/fabrinucci/fake_api/products';

  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get(usersProducts)
      .then( res => {
        setProducts(res.data);
      })
  }, [])

  const dispatch = useDispatch();

  const user = useSelector( state => state.user );

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(unsetUser());
    navigate('/');
  }

  return (
    <div className='container'>
      <h3>Home</h3>
      <p>Welcome: {user.fullname}</p>
      <button 
        className='btn btn-primary'
        onClick={ handleLogout }
      >
        Log out
      </button>

      <ProductsList products={ products } />
    </div>
  )
}
