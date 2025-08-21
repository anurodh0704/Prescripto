// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import { createContext } from "react";

// // export const AppContext = createContext();

// // const AppContextProvider = (props) => {
// //   const currencySymbol = `$`;
// //   const backendUrl = import.meta.env.VITE_BACKEND_URL;
// //   const [userData, setUserData] = useState(false);
// //   const [doctors, setDoctors] = useState([]);
// //   const [token, setToken] = useState(
// //     localStorage.getItem("token") ? localStorage.getItem("token") : false
// //   );

// //   const getDoctorsData = async () => {
// //     try {
// //       // const { data } = await axios.get(backendUrl + "/api/doctor/list");

// //       const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
// //         headers: {
// //           // CHANGE THIS LINE:
// //           Authorization: `Bearer ${storedToken}`, // <--- CORRECTED HEADER
// //         },
// //       });
// //       if (data.success) {
// //         setDoctors(data.doctors);
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.message);
// //     }
// //   };

// //   const loadUserProfileData = async () => {
// //     try {
// //       const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
// //         headers: { token },
// //       });
// //       if (data.success) {
// //         setUserData(data.userData);
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.message);
// //     }
// //   };
// //   const value = {
// //     doctors,
// //     currencySymbol,
// //     token,
// //     setToken,
// //     backendUrl,
// //     userData,
// //     setUserData,
// //     loadUserProfileData,
// //   };
// //   useEffect(() => {
// //     getDoctorsData();
// //   }, []);

// //   useEffect(() => {
// //     if (token) {
// //       loadUserProfileData();
// //     } else {
// //       setUserData(false);
// //     }
// //   }, [token]);
// //   return (
// //     <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
// //   );
// // };
// // export default AppContextProvider;

// //////19-07-25////////
// import React, { createContext, useEffect, useState } from "react"; // <-- Add React here

// import axios from "axios";
// import { toast } from "react-toastify";

// export const AppContext = createContext();

// const AppContextProvider = (props) => {
//   const currencySymbol = "$";
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [doctors, setDoctors] = useState([]);
//   const [token, setToken] = useState(
//     localStorage.getItem("token") ? localStorage.getItem("token") : false
//   );
//   const [userData, setUserData] = useState(false);

//   const getDoctorsData = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + "/api/doctor/list");
//       if (data.success) {
//         setDoctors(data.doctors);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   const loadUserProfileData = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
//         headers: { token },
//       });

//       if (data.success) {
//         setUserData(data.userData);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const value = {
//     doctors,
//     getDoctorsData,
//     currencySymbol,
//     token,
//     setToken,
//     backendUrl,
//     userData,
//     setUserData,
//     loadUserProfileData,
//   };

//   useEffect(() => {
//     getDoctorsData();
//   }, []);

//   useEffect(() => {
//     if (token) {
//       loadUserProfileData();
//     } else {
//       setUserData(false);
//     }
//   }, [token]);

//   return (
//     <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
//   );
// };

// export default AppContextProvider;

//brfore 25

// import React from "react";
// import { createContext, useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const AppContext = createContext();

// const AppContextProvider = (props) => {
//   const currencySymbol = "$";
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [doctors, setDoctors] = useState([]);
//   const [token, setToken] = useState(
//     localStorage.getItem("token") ? localStorage.getItem("token") : false
//   );
//   const [userData, setUserData] = useState(false);

//   const getDoctorsData = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + "/api/doctor/list");
//       if (data.success) {
//         setDoctors(data.doctors);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   const loadUserProfileData = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
//         headers: { token },
//       });
//       if (data.success) {
//         setUserData(data.user);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   const value = {
//     doctors,
//     getDoctorsData,
//     currencySymbol,
//     token,
//     setToken,
//     backendUrl,
//     userData,
//     setUserData,
//     loadUserProfileData,
//   };

//   useEffect(() => {
//     getDoctorsData();
//   }, []);

//   useEffect(() => {
//     if (token) {
//       loadUserProfileData();
//     } else {
//       setUserData(false);
//     }
//   }, [token]);

//   return (
//     <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
//   );
// };

// export default AppContextProvider;
//after 25

import React from "react";
import { createContext, useEffect, useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([]);

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  const [userData, setUserData] = useState(false);

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/doctor/list");

      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
        headers: { token },
      });

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };

  // backup code if error persists(ANUR)

  // const loadUserProfileData = async () => {

  //       try {

  //             const { data } = await axios.get(backendUrl + "/api/user/get-profile", {

  //                   headers: { token },

  //             });

  //             if (data.success) {

  //                   setUserData(data.userData);

  //             } else {

  //                   toast.error(data.message);

  //             }

  //       } catch (error) {

  //             console.log(error);

  //             toast.error(error.message);

  //       }

  // };

  const value = {
    doctors,

    getDoctorsData,

    currencySymbol,

    token,

    setToken,

    backendUrl,

    userData,
    setUserData,

    loadUserProfileData,
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
