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
							<p>
								Vaughn's A/C and Heating is based in El Dorado Hills, CA and serves El Dorado <br></br>
								and Sacramento Counties. Since opening, Vaughn's A/C has been steadily growing. <br></br>
								Despite the continued growth, complete customer satisfaction has remained our mission.<br></br>
							</p>
							<h5>California Contractor's License</h5>
							<p>
								License Number: 1040197<br></br>
							   	Held by Owner Aaron Vaughn</p>
						</div>
					</section>
				</div>
			</div>
        );
    }
}

export default AboutUs;