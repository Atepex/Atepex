const keys = require('../../config/keys');

module.exports = (contact) => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Someone wants you to contact them!</h3>
                    <p>Below you will find their contact information. Please get back to them ASAP</p>
                    <p>Name: ${contact.fname} ${contact.lname} </p>
                    <p>Phone: ${contact.phone} </p>
                    <p>Email: ${contact.email} </p>
                    <p>Comment: ${contact.comments} </p>
                </div>
            </body>
        </html>
    `;
};