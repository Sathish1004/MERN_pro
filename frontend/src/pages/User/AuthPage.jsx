// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../hooks/useAuth";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AuthPage = () => {
//   const navigate = useNavigate();
//   const { login, register } = useAuth();
//   const [isLogin, setIsLogin] = useState(true);
//   const [loading, setLoading] = useState(false);

//   // Login states
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   // Register states
//   const [name, setName] = useState("");
//   const [regEmail, setRegEmail] = useState("");
//   const [regPassword, setRegPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [phone, setPhone] = useState("");

//   // Login function
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const result = await login({ email: loginEmail, password: loginPassword });
      
//       if (result.success) {
//         toast.success("Login successful! Welcome back!");
//         setTimeout(() => {
//           navigate("/dashboard");
//         }, 1500);
//       } else {
//         toast.error(result.error || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Register function
//   const handleRegister = async (e) => {
//     e.preventDefault();

//     // Validation
//     if (regPassword !== confirmPassword) {
//       toast.error("Passwords do not match!");
//       return;
//     }

//     if (phone.length !== 10) {
//       toast.error("Please enter a valid 10-digit phone number!");
//       return;
//     }

//     setLoading(true);

//     try {
//       const result = await register({
//         name,
//         email: regEmail,
//         password: regPassword,
//         phone,
//         role: "user",
//       });

//       if (result.success) {
//         toast.success("Registration successful! Welcome!");
//         setTimeout(() => {
//           navigate("/dashboard");
//         }, 1500);
//       } else {
//         toast.error(result.error || "Registration failed. Please try again.");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={3000} />
      
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12 px-4">
//         <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">
//               {isLogin ? "User Login" : "Create Account"}
//             </h2>
//             <p className="text-gray-600">
//               {isLogin ? "Welcome back! Please login to continue" : "Join us today and find your perfect PG"}
//             </p>
//           </div>

//           {/* Toggle Buttons */}
//           <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
//             <button
//               onClick={() => setIsLogin(true)}
//               className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
//                 isLogin
//                   ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                   : "text-gray-600 hover:text-gray-800"
//               }`}
//             >
//               Login
//             </button>
//             <button
//               onClick={() => setIsLogin(false)}
//               className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
//                 !isLogin
//                   ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                   : "text-gray-600 hover:text-gray-800"
//               }`}
//             >
//               Register
//             </button>
//           </div>

//           {/* Login Form */}
//           {isLogin && (
//             <form onSubmit={handleLogin} className="space-y-4">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   required
//                   value={loginEmail}
//                   onChange={(e) => setLoginEmail(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Password</label>
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   required
//                   value={loginPassword}
//                   onChange={(e) => setLoginPassword(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </form>
//           )}

//           {/* Register Form */}
//           {!isLogin && (
//             <form onSubmit={handleRegister} className="space-y-4">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter your full name"
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   required
//                   value={regEmail}
//                   onChange={(e) => setRegEmail(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
//                 <input
//                   type="tel"
//                   placeholder="Enter 10-digit phone number"
//                   required
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   pattern="[0-9]{10}"
//                   maxLength="10"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Password</label>
//                 <input
//                   type="password"
//                   placeholder="Enter password (min 6 characters)"
//                   required
//                   value={regPassword}
//                   onChange={(e) => setRegPassword(e.target.value)}
//                   minLength="6"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
//                 <input
//                   type="password"
//                   placeholder="Confirm your password"
//                   required
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? "Creating Account..." : "Create Account"}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AuthPage;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthPage = () => {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register states
  const [name, setName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  // Quotes for different modes
  const loginQuotes = [
    "Welcome back! Your perfect PG awaits.",
    "Great to see you again! Continue your journey.",
    "Success is waiting for you. Login and explore!",
    "Your next chapter begins with a single login."
  ];

  const registerQuotes = [
    "Start your journey to finding the perfect home away from home.",
    "Join thousands finding their ideal PG accommodation.",
    "Your comfort story begins here. Register now!",
    "Find not just a room, but a community that cares."
  ];

  const [currentQuote] = useState(
    loginQuotes[Math.floor(Math.random() * loginQuotes.length)]
  );

  // Login function
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await login({ email: loginEmail, password: loginPassword });
      
      if (result.success) {
        toast.success("Login successful! Welcome back!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        toast.error(result.error || "Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const handleRegister = async (e) => {
    e.preventDefault();

    // Validation
    if (regPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (phone.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number!");
      return;
    }

    setLoading(true);

    try {
      const result = await register({
        name,
        email: regEmail,
        password: regPassword,
        phone,
        role: "user",
      });

      if (result.success) {
        toast.success("Registration successful! Welcome!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        toast.error(result.error || "Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* Enhanced Background with Gradient Overlay */}
      <div 
        className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center py-12 px-4 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(88, 28, 135, 0.85)), url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {/* Quote Section */}
          <div className="hidden lg:flex flex-col justify-center items-start p-8 text-white">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="mb-6">
                <div >
                  <span className="text-2xl"></span>
                </div>
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Find Your Perfect PG
                </h1>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <p className="text-lg text-white/90">Trusted by 10,000+ students and professionals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <p className="text-lg text-white/90">Verified PGs with premium amenities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <p className="text-lg text-white/90">Safe and secure living spaces</p>
                </div>
              </div>

              {/* Dynamic Quote */}
              <div className="mt-8 p-6 bg-white/5 rounded-2xl border-l-4 border-yellow-400">
                <p className="text-xl italic text-white/90 mb-2">
                  "{isLogin ? 
                    loginQuotes[Math.floor(Math.random() * loginQuotes.length)] : 
                    registerQuotes[Math.floor(Math.random() * registerQuotes.length)]}"
                </p>
                <div className="flex items-center mt-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm"></span>
                  </div>
                  <span className="text-white/70">PG Finder Team</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 transform hover:scale-[1.02] transition-all duration-300">
            {/* Header */}
            <div className="text-center mb-8">
              <div >
                <span className="text-2xl text-white"></span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {isLogin ? "Welcome Back!" : "Join Our Community"}
              </h2>
              <p className="text-gray-600">
                {isLogin ? "Continue your journey with us" : "Start your adventure today"}
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="flex gap-2 mb-8 bg-gradient-to-r from-blue-50 to-purple-50 p-1 rounded-2xl shadow-inner">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-4 rounded-xl font-semibold transition-all duration-300 transform ${
                  isLogin
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-4 rounded-xl font-semibold transition-all duration-300 transform ${
                  !isLogin
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                }`}
              >
                Register
              </button>
            </div>

            {/* Login Form */}
            {isLogin && (
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                      Logging in...
                    </div>
                  ) : (
                    "Login to Your Account"
                  )}
                </button>
              </form>
            )}

            {/* Register Form */}
            {!isLogin && (
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={regEmail}
                        onChange={(e) => setRegEmail(e.target.value)}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Phone Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="Enter 10-digit phone number"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        pattern="[0-9]{10}"
                        maxLength="10"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Enter password (min 6 characters)"
                        required
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        minLength="6"
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        ✅
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Confirm Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        ✅
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                      Creating Account...
                    </div>
                  ) : (
                    "Create Your Account"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;