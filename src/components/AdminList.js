import React from 'react';

const AdminList = (props) =>{
    return(
        <tr >
            <td>{props.id}</td>
            <td>{props.nombre_completo}</td>
            <td>{props.telefono}</td>
            
        </tr>
    )
    
}

export default AdminList;