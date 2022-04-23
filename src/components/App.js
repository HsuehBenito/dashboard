import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import {Route, Switch} from 'react-router-dom';
import Product from './Product';
import CategoriesInDb from './CategoriesInDb';
import Admins from './Admins';

// import ProductListCart from "./ProductListCart"
import Error from './Error';


function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <Switch>

          <Route path='/' exact>
              <ContentWrapper/>
          </Route>
          
          <Route path="/Product" component={Product}/>

          <Route path="/CategoriesInDb" component={CategoriesInDb}/>

          <Route path="/Admins" component={Admins}/>

          

          <Route component={Error}/>

          </Switch>
        </div>
    </React.Fragment>
  );
}

export default App;
