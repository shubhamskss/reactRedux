import {connect} from 'react-redux'
import Home from '../components/Home'
import {addToCart,removeToCart} from '../service/action/action'

const mapStateToProps=state=>(    console.log("state inside container===",state.cardItems),{

    cartData:state.cardItems
})


const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeCartHandler:data=>dispatch(removeToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)







// export default Home