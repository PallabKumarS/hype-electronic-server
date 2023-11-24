const logOut = async (req, res) => {
  try {
    const user = req.body;
    res.clearCookie("token", { maxAge: 0 }).send({ success: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = logOut;
