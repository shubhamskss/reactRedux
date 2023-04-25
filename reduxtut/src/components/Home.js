import React from 'react'
const Home = (props) => {
    console.log("props=====", props.cartData)
    return (<div>
        

        <h1>Home Component</h1>
        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src="https://m.media-amazon.com/images/I/71geVdy6-OS._SL1500_.jpg" />
            </div>
            <div className='text-wrapper item'>
                <span>
                    I-Phone
                </span>
                <span>
                    price:$1000
                </span>

            </div>
            <div className='btn-wrapper item'>
                <button onClick={() => props.addToCartHandler({ price: 1000, name: 'iphone' })}>add to cart</button>
                <button onClick={()=>props.removeCartHandler({price:1000,name:'iphone'})}>Remove from cart</button>
            </div>
        </div>
    </div>)

}
export default Home