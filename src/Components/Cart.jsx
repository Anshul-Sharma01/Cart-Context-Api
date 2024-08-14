import { useState, useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import "./Cart.css";

function Cart(){
    const { cartProducts, setCartProducts } = useContext(CartContext);

    const [ totalCartItems, setTotalCartItems ] = useState(0);

    function fetchNumberOfCartItems(){
        let count = 0;
        cartProducts.forEach((ele) => {
            count += 1;
        })
        setTotalCartItems(count);
    }

    useEffect(() => {
        fetchNumberOfCartItems();
    }, [cartProducts])


    return (
        <>
            <h1>Cart</h1>
            {
                cartProducts.length === 0 && (
                    <h3>Cart is Empty</h3>
                )
            }
            {cartProducts.length > 0 && (
                <section>
                    {cartProducts.map((ele) => (
                        <div className="productsDiv" key={ele.id}>
                            <img src={ele.image} />
                            <h3>{ele.title}</h3>
                            <span>{ele.category}</span>
                            <p></p>
                            <button onClick={() => {
                                setCartProducts(
                                    cartProducts.filter((el) => {
                                        return el.id !== ele.id
                                    })
                                )
                            }}>Remove From Cart</button>
                        </div>
                    ))}
                </section>
            )}
            <h2>Total Cart Items : {totalCartItems}</h2>
        </>
    )




}


export default Cart;









