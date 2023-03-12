import React from 'react';
import ContentPrincipal from './ContentPrincipal';
import ContentRowCards from './ContentRowCards';
import {Link, Route, Switch} from 'react-router-dom';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<main>
					<Link className='titulo-dashboard' to='/'>
						<h2>DASHBOARD - PORTAL MUJER</h2>
					</Link>
					<div className='dashboard-main'>
						<ContentRowCards />
					</div>
				</main>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;