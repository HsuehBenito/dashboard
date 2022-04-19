import React, { Component } from 'react';
import SmallCard from './SmallCard';
class ContentRowProducts extends Component{
       
	constructor(props){
		super(props);
		this.state = {
			productsList: [],
		}
	} 

	getProducts(){
        fetch("/api").then(r => r.json()).then(respuesta =>{ 
            this.setState({productsList: respuesta.data})
        })
    }

    // getUsers(){
    //     fetch("/api/users").then(r => r.json()).then(respuesta =>{ 
    //         this.setState({usersList: respuesta.meta})
    //     })
    // }

    componentDidMount(){
        this.getProducts()
        
    }
    
    render(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
           <SmallCard valor={this.state.productsList.count} titulo="Products in Data Base" color="primary" icono="fas fa-box-open"/>
           
           
        </div>
        </React.Fragment>
    )
}  }
export default ContentRowProducts;