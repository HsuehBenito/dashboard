import React, { Component } from 'react'

class LastProductInDb extends Component {
	constructor(props){
		super(props);
		this.state = {
			products: {},
		}
	} 

	

	render(){
		
		let url = "http://localhost:3000/products/" + this.state.products.id
		
		return (
			<div className="col-lg-6 mb-4"  style={{display: "none"}} >
				
			</div>
   			 )
		}
}

export default LastProductInDb;
