import React from 'react'
const Header = (props) => {
    return(

    <div className='add-to-cart'>
    
            <span className='cart-count'>{props.cartData.length}</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPYSre9nGAi6mpon3JM4qUNlqjQUf0878KRehU51aYA&s" />
        </div>
    )
}
export default Header