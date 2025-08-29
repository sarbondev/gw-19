import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
    if (!token) return res.status(403).json({ message: "No token" });

    const { id } = jwt.verify(token, process.env.JWT_KEY);
    req.userId = id;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
