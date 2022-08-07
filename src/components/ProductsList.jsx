import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../reducers/cart';

export const ProductsList = ({ products }) => {
  
  const dispatch = useDispatch();

  const { productsList } = useSelector( state => state.cart );

  const handleCart = ( productId ) => {
    const productAdded = products.find( product => product.id === productId );

    if( productsList.find( prod => prod.id === productId) ) {
      dispatch( removeProductFromCart( productId ) );
    } else {
      dispatch( addProductToCart( productAdded ) );
    }
    
  }

  return (
    <>

      <h3 className='mt-3 text-center'>Product List</h3>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {
          products.map( product => (
            <div className='col' key={ product.id }>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>{ product.name }</h5>
                  <p className='card-text'>Price: ${ product.price }</p>
                  <p className='card-text'>Category: { product.category }</p>
                  <button
                    className={
                      `
                        btn 
                        ${ productsList.find( prod => prod.id === product.id ) 
                        ? 'btn-danger' 
                        : 'btn-success' 
                      }`}
                    onClick={ () => handleCart(product.id) }
                  >
                    {
                      productsList.find( 
                        prod => prod.id === product.id ) 
                        ? 'Remove from cart' 
                        : 'Add to cart'
                    }
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}