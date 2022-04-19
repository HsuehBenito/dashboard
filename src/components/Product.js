import React, { Component } from 'react';
import ProductList from './ProductList';

class Product extends Component{

	constructor(props){
		super(props);
		this.state = {
			productsList: []
		}
	}

	getProducts(){
        fetch("http://localhost:3003/api").then(r => r.json()).then(respuesta =>{ 
            this.setState({productsList: respuesta.data})
        })
    }

    componentDidMount(){
        this.getProducts()
    }
	
	render(){

    return(
        <React.Fragment>
			<div className="contaniner-fluid">
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Descripcion</th>
                                            <th>Precio</th>
                                            <th>Cosecha</th>
											<th>Blend</th>
											<th>volumen</th>
											<th>Administrador</th>
											<th>stock</th>
											<th>Categoria</th>
										</tr>
									</thead>
									
									<tfoot>
										<tr>
										<th>Id</th>
                                            <th>Nombre</th>
                                            <th>Descripcion</th>
                                            <th>Precio</th>
                                            <th>Cosecha</th>
											<th>Blend</th>
											<th>Volumen</th>
											<th>Administrador</th>
											<th>Stock</th>
											<th>Categoria</th>
										</tr>
									</tfoot>
									<tbody>
									{
                                    this.state.productsList.map((product,i)=>{
                                        return  <ProductList  {...product}  key={i} />
                                    })
                                }
									</tbody>
								</table>
							</div>
						</div>
					</div>     
				</div>       
        </React.Fragment>
    )
}
}
export default Product;