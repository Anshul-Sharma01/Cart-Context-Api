import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";


function Cart(){
    const { cartProducts } = useContext(CartContext);

    return (
        <>
            {cartProducts.length > 0 && (
                <section>
                    {cartProducts.map((ele) => (
                        <div key={ele.id}>
                            <img src={ele.image} />
                            <h3>{ele.title}</h3>
                            <span>{ele.category}</span>
                        </div>
                    ))}
                </section>
            )}
        </>
    )




}


export default Cart;









