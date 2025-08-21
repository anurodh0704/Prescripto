/*import jwt from "jsonwebtoken";
//User authentication middleware

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
*/
// import jwt from "jsonwebtoken";

// // user authentication middleware
// const authUser = async (req, res, next) => {
//   try {
//     const { token } = req.headers;

//     if (!token) {
//       return res.json({
//         success: false,
//         message: "Not Authorized. Login Again",
//       });
//     }

//     const token_decode = jwt.verify(token, process.env.JWT_SECRET);

//     // ✅ Fix here
//     if (!req.body) {
//       req.body = {};
//     }
//     req.userId = token_decode.id;

//     // req.body.userId = "687b9c39ad5b5e2ad94addf6";

//     next();
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// export default authUser;

///25/07/255555

import jwt from "jsonwebtoken";

// user authentication middleware

const authUser = async (req, res, next) => {
  try {
    const token = req.headers?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Please login again.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Ensure req.body exists before setting userId

    if (!req.body) req.body = {};

    req.body.userId = decoded?.id;

    next();
  } catch (error) {
    console.error("Auth middleware error:", error);

    res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};
export default authUser;
