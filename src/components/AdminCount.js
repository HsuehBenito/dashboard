import React, { Component } from 'react';
import SmallCard from './SmallCard';
class AdminCount extends Component{
       
	constructor(props){
		super(props);
		this.state = {
			AdminCount: [],
		}
	} 

	getProducts(){
        fetch("http://localhost:3003/api/administrador")
       .then(r => r.json())
       .then(respuesta =>{ 
           this.setState({AdminCount: respuesta.count})
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
           <SmallCard valor={this.state.AdminCount} titulo="Administradores en Base de Datos" color="primary" icono="fas fa-box-open"/>
        </div>
        </React.Fragment>
    )
}  }
export default AdminCount;
