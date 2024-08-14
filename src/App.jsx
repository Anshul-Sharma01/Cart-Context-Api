import { useEffect, useState } from 'react'
import fetchProducts from './utils/fetchProducts'
import './App.css'

function App() {
  const [ products, setProducts ] = useState([]);
  const [ dataFetching, setDataFetching ] = useState(false);

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
      {
        dataFetching && (
          <section>
          {products.map((ele) => (
            <div className='productsdiv' key={ele.id}>
              <img src={ele.image} alt={ele.title} />
              <h3>{ele.title}</h3>
              <span>{ele.category}</span>
              <p>{ele.description}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </section>
        )
      }
    </>
  )
}

export default App
