import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <div className="flex flex-col min-h-screen">
    <ToastContainer position="top-right" autoClose={3000} />
    
    {/* Navbar at top */}
    <Navbar />

    {/* Main content area */}
    <main className="flex-grow">
      <AppRoutes />
    </main>

    {/* Footer at bottom */}
    <Footer />
  </div>
);

export default App;
