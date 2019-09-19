import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div id="main">
				<div id="content">
					<section>
						<div className="container">
							<h3>About Us</h3>
							<br></br>
							<h4>Owner</h4>
							<p>Aaron Vaughn started Vaughn's A/C and Heating in June, 2018. <br></br>
							Aaron has over 6 years of professional experience.</p>
							<h4>Company</h4>
							<p>Since opening, Vaughn's A/C has been steadily growing. Despite<br></br>
							the continued growth, customer satisfaction has remained at the forefront.<br></br>
							Vaughn's A/C and Heating is based in <br></br>
							El Dorado Hills, CA.  Vaughn's services El Dorado and Sacramento Counties.  </p>
							<h5>California Contractor's License</h5>
							<p>License Number: 123456<br></br>
							   Held by Owner Aaron Vaughn</p>
						</div>
					</section>
				</div>
			</div>
        );
    }
}

export default AboutUs;