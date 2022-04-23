import React, { Component } from 'react';
import SmallCard from './SmallCard';
class CategoryCount extends Component{
       
	constructor(props){
		super(props);
		this.state = {
			categoriesCount: [],
            
		}
	} 

	getCategories(){
        fetch("http://localhost:3003/api/categorias")
       .then(r => r.json())
       .then(respuesta =>{ 
           this.setState({categoriesCount: respuesta.count})
       })
       .catch(err=>{
           console.log(err)
       })
   }
   componentDidMount(){
       this.getCategories()
       
   }
    
    render(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
           <SmallCard valor={this.state.categoriesCount} titulo="Categorias en Base de Datos" color="primary" icono="fas fa-box-open"/>
        </div>
        </React.Fragment>
    )
}  }
export default CategoryCount;