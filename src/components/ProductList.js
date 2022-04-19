import React from 'react';

const ProductList = (props) =>{
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.administrador.nombre}</td>
            <td>{props.nombre}</td>
            <td>{props.blend}</td>
            <td>{props.cosecha}</td>
            <td>{props.precio}</td>
            <td>{props.volumen}</td>
            <td>{props.descripcion}</td>
            <td>{props.stock}</td>
            <td>{props.categoria.nombre}</td>
        </tr>
    )
    
}

export default ProductList;