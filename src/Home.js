import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img className='home_image'
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                alt=""
            />

            {/* Product Row 1 : id, title, price, rating, image */}
            <div className='home_row'>
                <Product 
                    id = "123456"
                    title = "The Lean Startup yadayada"
                    price = {11.96}
                    rating = {5}
                    image = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcReryuwqiZO8jQ2HeiS6QRxgg58YjUgzfiMwYWqbVlKmpETFM297c3P0Rxhs-QY5t5YJWWFhcFFKcTcXashePfu9XfYXnbh3Go3JpyXjGWUkLffSNqJOyutvQ&usqp=CAc"
                />
                <Product 
                    id = "123456"
                    title = "The Lean Startup yadayada"
                    price = {11.96}
                    rating = {5}
                    image = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcReryuwqiZO8jQ2HeiS6QRxgg58YjUgzfiMwYWqbVlKmpETFM297c3P0Rxhs-QY5t5YJWWFhcFFKcTcXashePfu9XfYXnbh3Go3JpyXjGWUkLffSNqJOyutvQ&usqp=CAc"
                />
            </div>
                
            {/* Product Row 2 */}
            <div className='home_row'>
                <Product 
                    id = "123456"
                    title = "The Lean Startup yadayada"
                    price = {11.96}
                    rating = {5}
                    image = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcReryuwqiZO8jQ2HeiS6QRxgg58YjUgzfiMwYWqbVlKmpETFM297c3P0Rxhs-QY5t5YJWWFhcFFKcTcXashePfu9XfYXnbh3Go3JpyXjGWUkLffSNqJOyutvQ&usqp=CAc"
                />
                <Product 
                    id = "123456"
                    title = "The Lean Startup yadayada"
                    price = {11.96}
                    rating = {5}
                    image = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcReryuwqiZO8jQ2HeiS6QRxgg58YjUgzfiMwYWqbVlKmpETFM297c3P0Rxhs-QY5t5YJWWFhcFFKcTcXashePfu9XfYXnbh3Go3JpyXjGWUkLffSNqJOyutvQ&usqp=CAc"
                />
                <Product 
                    id = "123456"
                    title = "The Lean Startup yadayada"
                    price = {11.96}
                    rating = {5}
                    image = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcReryuwqiZO8jQ2HeiS6QRxgg58YjUgzfiMwYWqbVlKmpETFM297c3P0Rxhs-QY5t5YJWWFhcFFKcTcXashePfu9XfYXnbh3Go3JpyXjGWUkLffSNqJOyutvQ&usqp=CAc"
                />
            </div>

            {/* Product Row 3 */}
            <div className='home_row'>
                <Product 
                    id = "123456"
                    title = "The Lean Startup yadayada"
                    price = {11.96}
                    rating = {5}
                    image = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcReryuwqiZO8jQ2HeiS6QRxgg58YjUgzfiMwYWqbVlKmpETFM297c3P0Rxhs-QY5t5YJWWFhcFFKcTcXashePfu9XfYXnbh3Go3JpyXjGWUkLffSNqJOyutvQ&usqp=CAc"
                />
            </div>

        </div>
    )
}

export default Home