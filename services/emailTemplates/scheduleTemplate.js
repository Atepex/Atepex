module.exports = (schedule) => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Someone wants to schedule an appointment!</h3>
                    <p>Below you will find their contact information. Please get back to them ASAP to confirm the appointment</p>
                    <p>Name: ${schedule.fname} ${schedule.lname} </p>
                    <p>Street:  ${schedule.street} </p>
                    <p>State:  ${schedule.stateAbbrv} </p>
                    <p>Zip Code:  ${schedule.zip} </p>
                    <p>Service: ${schedule.service} </p>
                    <p>Time: ${schedule.time} </p>
                    <p>Comments: ${schedule.comments} </p>
                </div>
            </body>
        </html>
    `;
};