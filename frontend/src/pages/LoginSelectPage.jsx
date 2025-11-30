
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const LoginSelectPage = () => {
//   const navigate = useNavigate();
//   const [activePage, setActivePage] = useState("select");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   // 🔹 USER LOGIN HANDLER
//   const handleUserLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     if (password.length < 8) {
//       alert("Password must be at least 8 characters.");
//       setIsLoading(false);
//       return;
//     }
    
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     localStorage.setItem("role", "user");
//     setIsLoading(false);
//     navigate("/");
//   };

//   // 🔹 ADMIN LOGIN HANDLER
//   // const handleAdminLogin = async (e) => {
//   //   e.preventDefault();
//   //   setIsLoading(true);

//   //   await new Promise(resolve => setTimeout(resolve, 1500));
    
//   //   if (email === "admin@gmail.com" && password === "admin123") {
//   //     localStorage.setItem("role", "admin");
//   //     navigate("/admin-dashboard");
//   //   } else {
//   //     alert("Invalid admin email or password!");
//   //   }
//   //   setIsLoading(false);
//   // };


//   const handleAdminLogin = async (e) => {
//   e.preventDefault();
//   setIsLoading(true);

//   await new Promise(resolve => setTimeout(resolve, 1500));

//   if (email === "admin@gmail.com" && password === "admin123") {
//     localStorage.setItem("role", "admin");
//     navigate("/admin-dashboard"); // Redirect to admin dashboard
//   } else {
//     alert("Invalid admin email or password!");
//   }

//   setIsLoading(false);
// };


//   // 🔹 REGISTER HANDLER
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     if (password.length < 8) {
//       alert("Password must be at least 8 characters.");
//       setIsLoading(false);
//       return;
//     }
//     if (password !== confirm) {
//       alert("Passwords do not match!");
//       setIsLoading(false);
//       return;
//     }
    
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     localStorage.setItem("role", "user");
//     alert("Registration successful!");
//     setIsLoading(false);
//     setActivePage("userLogin");
//   };

//   // Back button handler
//   const handleBack = () => {
//     setActivePage("select");
//     setEmail("");
//     setPassword("");
//     setConfirm("");
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 pt-24">
//         <div className="w-full max-w-md">
//           {/* Main Card */}
//           <div className="bg-white shadow-lg rounded-2xl border border-gray-200">
            
//             {/* Header Section */}
//             <div className="p-6 border-b border-gray-200">
//               {activePage === "select" && (
//                 <div className="text-center">
//                   <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <span className="text-2xl text-blue-600"></span>
//                     <img src="../assets/react.svg" alt="Login" className="w-12 h-10 rounded-full"/>
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                     Welcome Back
//                   </h2>
//                   <p className="text-gray-600 text-sm">
//                     Choose your login method to continue
//                   </p>
//                 </div>
//               )}

//               {activePage !== "select" && (
//                 <div className="flex items-center justify-between">
//                   <button
//                     onClick={handleBack}
//                     className="flex items-center text-gray-600 hover:text-gray-800 transition-colors p-2 rounded-lg hover:bg-gray-100"
//                   >
//                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                     </svg>
//                     Back
//                   </button>
//                   <div className="text-center flex-1">
//                     <h2 className="text-xl font-bold text-gray-800">
//                       {activePage === "userLogin" && "User Login"}
//                       {activePage === "adminLogin" && "Admin Portal"}
//                       {activePage === "register" && "Create Account"}
//                     </h2>
//                   </div>
//                   <div className="w-16"></div>
//                 </div>
//               )}
//             </div>

//             {/* Content Section */}
//             <div className="p-6">
//               {/* --------------------------- SELECT PAGE --------------------------- */}
//               {activePage === "select" && (
//                 <div className="space-y-4">
//                   {/* USER LOGIN BUTTON */}
//                   <button
//                     onClick={() => setActivePage("userLogin")}
//                     className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
//                   >
//                     <div className="flex items-center justify-center space-x-3">
//                       <span className="text-lg"></span>
//                       <div className="text-left">
//                         <div className="font-semibold">User Login</div>
//                         <div className="text-blue-100 text-xs">Access your personal dashboard</div>
//                       </div>
//                     </div>
//                   </button>

//                   {/* ADMIN LOGIN BUTTON */}
//                   <button
//                     onClick={() => setActivePage("adminLogin")}
//                     className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
//                   >
//                     <div className="flex items-center justify-center space-x-3">
//                       <span className="text-lg"></span>
//                       <div className="text-left">
//                         <div className="font-semibold">Admin Portal</div>
//                         <div className="text-amber-100 text-xs">Manage system and users</div>
//                       </div>
//                     </div>
//                   </button>

//                   {/* Divider */}
//                   <div className="relative flex items-center py-4">
//                     <div className="flex-grow border-t border-gray-300"></div>
//                     <span className="flex-shrink mx-4 text-gray-500 text-sm">or</span>
//                     <div className="flex-grow border-t border-gray-300"></div>
//                   </div>

//                   {/* REGISTER BUTTON */}
//                   <button
//                     onClick={() => setActivePage("register")}
//                     className="w-full bg-blue-600 hover:bg--700 text-white font-semibold py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
//                   >
//                     <div className="flex items-center justify-center space-x-2">
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
//                       </svg>
//                       <span>Create New Account</span>
//                     </div>
//                   </button>
//                 </div>
//               )}

//               {/* --------------------------- USER LOGIN PAGE --------------------------- */}
//               {activePage === "userLogin" && (
//                 <form onSubmit={handleUserLogin} className="space-y-4">
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                       <input
//                         type="email"
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
//                         placeholder="Enter your email"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                       <input
//                         type="password"
//                         required
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
//                         placeholder="Enter your password"
//                       />
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {isLoading ? (
//                       <div className="flex items-center justify-center space-x-2">
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         <span>Signing in...</span>
//                       </div>
//                     ) : (
//                       "Sign In"
//                     )}
//                   </button>

//                   <div className="text-center pt-2">
//                     <p className="text-sm text-gray-600">
//                       Don't have an account?{" "}
//                       <button
//                         type="button"
//                         onClick={() => setActivePage("register")}
//                         className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 hover:underline"
//                       >
//                         Create one here
//                       </button>
//                     </p>
//                   </div>
//                 </form>
//               )}

//               {/* --------------------------- ADMIN LOGIN PAGE --------------------------- */}
//               {activePage === "adminLogin" && (
//                 <form onSubmit={handleAdminLogin} className="space-y-4">
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
//                       <input
//                         type="email"
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
//                         placeholder="admin@gmail.com"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                       <input
//                         type="password"
//                         required
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
//                         placeholder="Enter admin password"
//                       />
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {isLoading ? (
//                       <div className="flex items-center justify-center space-x-2">
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         <span>Accessing Portal...</span>
//                       </div>
//                     ) : (
//                       "Access Admin Portal"
//                     )}
//                   </button>

//                   <div className="text-center p-3 bg-amber-50 rounded-lg border border-amber-200">
//                     <p className="text-sm text-amber-700 font-medium">
//                       Demo credentials: admin@gmail.com / admin123
//                     </p>
//                   </div>
//                 </form>
//               )}

//               {/* --------------------------- REGISTER PAGE --------------------------- */}
//               {activePage === "register" && (
//                 <form onSubmit={handleRegister} className="space-y-4">
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                       <input
//                         type="email"
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
//                         placeholder="Enter your email"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                       <input
//                         type="password"
//                         required
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
//                         placeholder="Minimum 8 characters"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
//                       <input
//                         type="password"
//                         required
//                         value={confirm}
//                         onChange={(e) => setConfirm(e.target.value)}
//                         className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
//                         placeholder="Re-enter your password"
//                       />
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {isLoading ? (
//                       <div className="flex items-center justify-center space-x-2">
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         <span>Creating Account...</span>
//                       </div>
//                     ) : (
//                       "Create Account"
//                     )}
//                   </button>

//                   <div className="text-center pt-2">
//                     <p className="text-sm text-gray-600">
//                       Already have an account?{" "}
//                       <button
//                         type="button"
//                         onClick={() => setActivePage("userLogin")}
//                         className="text-green-600 font-semibold hover:text-green-800 transition-colors duration-200 hover:underline"
//                       >
//                         Sign in here
//                       </button>
//                     </p>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>

//           {/* Footer Note */}
//           <div className="text-center mt-6">
//             <p className="text-xs text-gray-500">
//               Secure login with encryption
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default LoginSelectPage;