const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("token");

  if (!accessToken) {
    return res.status(401).json({ error: "User not logged in" });
  }

  try {
    const validToken = verify(accessToken, "pbpbrns12301234");

    if (!validToken) {
      return res.status(401).json({ error: "Invalid token" });
    }

    const { exp } = validToken;
    const currentTime = Math.floor(Date.now() / 1000);

    if (exp < currentTime) {
      return res.status(401).json({ error: "Token has expired" });
    }

    req.user = validToken;
    return next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { validateToken };
