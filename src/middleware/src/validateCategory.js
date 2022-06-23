module.exports = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: '"name" is required' });
  }

  next();
};