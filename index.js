const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/User');
require('./models/SystemSettings');
require('./models/Contact');
require('./models/Schedule');
require("./models/Invoice");
require('./services/passport');
require('./models/Invoice');
require('./models/Images');


mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
	.catch(err => {
		console.log(err);
	});
	
const app = express();
app.use(bodyParser.urlencoded({
    limit: '5mb',
    parameterLimit: 100000,
    extended: false 
}));

app.use(bodyParser.json({
    limit: '5mb'
}));


app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [ keys.cookieKey ]
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/settingRoutes')(app);
require('./routes/contactRoutes')(app);
require('./routes/scheduleRoutes')(app);
require('./routes/clientRoutes')(app);
require('./routes/invoiceRoutes')(app);

require('./routes/userInvoiceRoute')(app);


if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
