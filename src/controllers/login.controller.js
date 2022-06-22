const loginServices = require('../services/login.service');

const auth = async (req, res) => {
  const token = await loginServices.auth(req.body);
  res.status(200).json({ token });
};

module.exports = {
  auth,
};