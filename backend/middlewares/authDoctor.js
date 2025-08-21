// import jwt from "jsonwebtoken";

// // doctor authentication middleware

// const authDoctor = async (req, res, next) => {
//   try {
//     const dtoken = req.headers?.token;

//     if (!dtoken) {
//       return res.status(401).json({
//         success: false,
//         message: "Not Authorized. Please login again.",
//       });
//     }

//     const decoded = jwt.verify(dtoken, process.env.JWT_SECRET);

//     // Ensure req.body exists before setting userId

//     if (!req.body) req.body = {};

//     req.body.docId = decoded?.id;

//     next();
//   } catch (error) {
//     console.error("Auth middleware error:", error);

//     res
//       .status(401)
//       .json({ success: false, message: "Invalid or expired token" });
//   }
// };
// export default authDoctor;

import jwt from "jsonwebtoken";

// doctor authentication middleware
const authDoctor = async (req, res, next) => {
  const { dtoken } = req.headers;
  if (!dtoken) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }
  try {
    const decoded = jwt.verify(dtoken, process.env.JWT_SECRET);
    //   Ensure req.body exists before setting userId

    if (!req.body) req.body = {};

    req.body.docId = decoded?.id;

    next();
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: error.message });
  }
};

export default authDoctor;
