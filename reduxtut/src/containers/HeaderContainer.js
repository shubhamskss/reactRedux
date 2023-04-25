import Header from '../components/Header'
import {connect} from 'react-redux';
// import {addToCart} from '../service/action/action'



const mapStateToProps=state=>(    console.log("state inside Header container===",state.cardItems),{

    cartData:state.cardItems
})


const mapDispatchToProps=dispatch=>({
    // addToCartHandler:data=>dispatch(addToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)







// export default Home