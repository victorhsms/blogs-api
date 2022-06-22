const messages = require('../mocks/messages');

const loginServices = require('../services/login.service');

const auth = async (req, res) => {
  try {
    const hash = await loginServices.auth(req.body);
    res.status(200).json({ token: hash });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: messages[500] });
  }
};

module.exports = {
  auth,
};