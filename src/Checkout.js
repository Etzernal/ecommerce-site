import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {

    const [{basket}] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src="https://thumbs.dreamstime.com/b/long-banner-topic-traveling-around-world-landmarks-background-modern-city-opera-house-pisa-65929806.jpg" 
                alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more items, click 'Add to Basket' next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className='checkout_title'>Your Shopping Basket</h2>
                        {/* List out all checkout products */}
                        {basket?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            { basket.length > 0 && (
                <div className='checkout_right'>
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout;