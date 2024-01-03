import jwt from "jsonwebtoken";

export const middlewareFunc = async (req, res, next) => {
  try {
    req.headers.authorization && req.headers.authorization.startsWith("Bearer"); // Corrected typo
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(403)
        .json({ message: "You are not authenticated, token missing" });
    }
    await jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "You are not authorized" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
  }
};
