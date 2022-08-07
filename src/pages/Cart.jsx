import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromCart } from '../reducers/cart';

export const Cart = () => {
  
  const dispatch = useDispatch();

  const { productsList } = useSelector( state => state.cart );

  const handleRemove = ( productId ) => dispatch( removeProductFromCart( productId ) );

  return (
    <>

      <h3 className='mb-2'>Cart</h3>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Category</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            productsList.map( product => (
              <tr key={ product.id}>
                <th scope='row'>{ product.id }</th>
                <td scope='row'>{ product.name }</td>
                <td scope='row'>{ product.price }</td>
                <td scope='row'>{ product.category }</td>
                <td scope='row'>
                  <button 
                    className='btn btn-danger'
                    onClick={ () => handleRemove(product.id) }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </>
  )
}
