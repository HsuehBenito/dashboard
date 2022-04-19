import React, {Component} from 'react';
import ProductCart from "./ProductCart"

class ProductListCart extends Component{
    constructor(props){
		super(props);
		this.state = {
			products: [],
		}
	} 
    render(){
        return(
            <div className="col-lg-6 mb-4" style={{display:'none'}}>
				
			</div>
        )
    }

}

export default ProductListCart;