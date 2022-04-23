import React, { Component } from 'react';
import SmallCard from './SmallCard';
class ProductCount extends Component{
       
	constructor(props){
		super(props);
		this.state = {
			productsCount: [],
		}
	} 

	getProducts(){
        fetch("http://localhost:3003/api")
       .then(r => r.json())
       .then(respuesta =>{ 
           this.setState({productsCount: respuesta.count})
       })
       .catch(err=>{
           console.log(err)
       })
   }
   componentDidMount(){
       this.getProducts()
       
   }
    
    render(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
           <SmallCard valor={this.state.productsCount} titulo="Productos en Base de Datos" color="primary" icono="fas fa-box-open"/>
        </div>
        </React.Fragment>
    )
}  }
export default ProductCount;
