import React, { Component } from 'react';
import CategoryCount from './CategoryCount';
import ProductCount from './ProductCount';
import AdminCount from './AdminCount';
// import CategoriesInDb from './CategoriesInDb';
// import ContentRowProducts from './ContentRowProducts';
// import LastProductInDb from "./LastProductInDb"

class ContentRowTop extends Component{
	render(){
		return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard - Alzacopas</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					{/* <ContentRowProducts /> */}
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<CategoryCount/>
						{/*<!-- End content row last movie in Data Base -->*/}
						<ProductCount/>
						{/*<!-- Genres in DB -->*/}
						<AdminCount/>
						{/* <CategoriesInDb /> */}
						
						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}}
export default ContentRowTop;