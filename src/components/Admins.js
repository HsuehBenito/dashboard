import React, { Component } from 'react';
import AdminList from './AdminList';

class Admins extends Component{

	constructor(props){
		super(props);
		this.state = {
			AdminList: []
		}
	}

	 getProducts(){
           fetch ("http://localhost:3003/api/administrador")
		  .then(r => r.json())
		  .then(respuesta =>{ 
            this.setState({AdminList: respuesta.data})
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
					<h1 className="h3 mb-2 text-gray-800">Administradores en la Base de Datos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre Completo</th>
                                            <th>Telefono</th>
                                           
										</tr>
									</thead>
									
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre Completo</th>
                                            <th>Telefono</th>
										</tr>
									</tfoot>
									<tbody>
									{
                                    this.state.AdminList.map((admin,i)=>{
                                        return  <AdminList  {...admin}  key={i} />
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
export default Admins;