module.exports = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send({ error: 'You must log in!' });
	}
	if (req.user.id == 0) {
		return res.status(401).send({ error: 'You must log in!!' });
	}

	next();
};
