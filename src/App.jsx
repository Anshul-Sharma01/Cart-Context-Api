import { useEffect, useState } from 'react'
import fetchProducts from './utils/fetchProducts.js'
import { CartContext } from './contexts/CartContext.jsx';
import { useContext } from 'react';
import './App.css'
import Cart from './Components/Cart.jsx';
import { Link } from 'react-router-dom';

function App() {
  const [ products, setProducts ] = useState([]);
  const [ dataFetching, setDataFetching ] = useState(false);

  const {cartProducts, setCartProducts} = useContext(CartContext);

  useEffect(() => {
    async function fetchPr(){
      const data = await fetchProducts();
      setProducts(data);
      setDataFetching(true);
    }
    fetchPr();
  }, []);

  return(
    <>
      <h1>Shopping Cart</h1>
      <Link to='/cart'>Cart</Link>
      {
        dataFetching && (
          <section>
          {products.map((ele) => (
            <div className='productsdiv' key={ele.id}>
              <img src={ele.image} alt={ele.title} />
              <h3>{ele.title}</h3>
              <span>{ele.category}</span>
              <p>{ele.description}</p>
              <button onClick={() => {
                setCartProducts(
                  [
                    ...cartProducts,
                    {id : ele.id, title : ele.title, category : ele.category, image : ele.image}
                  ]
                )
              }}>Add to Cart</button>
            </div>
          ))}
        </section>
        )
      }
    </>
  )
}

export default App
