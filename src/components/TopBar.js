import React from 'react';
import foto from '../assets/images/pikachuasustado.jpg';
import {Link} from 'react-router-dom';

function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					{/*<!-- Sidebar Toggle (Topbar) -->*/}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">

						
						

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<Link className="nav-link dropdown-toggle" to="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">Pikachu con miedo</span>
								<img className="img-profile rounded-circle" src={foto} alt="Santiago Argilla - Profesor de DH de React" width="60"/>
							</Link>
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;