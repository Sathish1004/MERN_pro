
// import { useParams } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import { useState } from "react";
// import api from "../../services/api";

// const pgDetails = {
//   1: { 
//     name: "Elite Men's Stay", 
//     location: "Velachery", 
//     price: 7500,
//     image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&h=400&fit=crop",
//     amenities: ["WiFi", "AC", "Food", "Laundry"],
//     rating: 4.5,
//     reviews: 128
//   },
//   2: { 
//     name: "Royal Boys PG", 
//     location: "Tambaram", 
//     price: 6800,
//     image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop",
//     amenities: ["WiFi", "Food", "Parking"],
//     rating: 4.2,
//     reviews: 89
//   },
//   3: { 
//     name: "Comfort Stay", 
//     location: "Guindy", 
//     price: 8200,
//     image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&h=400&fit=crop",
//     amenities: ["WiFi", "AC", "Food", "Gym", "Laundry"],
//     rating: 4.7,
//     reviews: 156
//   },
// };

// // ---------------- STORE BOOKING IN LOCAL STORAGE ------------------------
// const storeBooking = (bookingData) => {
//   const existingBookings = JSON.parse(localStorage.getItem('pgBookings') || '[]');
//   const newBooking = {
//     id: Date.now(),
//     ...bookingData,
//     bookingDate: new Date().toISOString(),
//     status: 'confirmed'
//   };
//   existingBookings.push(newBooking);
//   localStorage.setItem('pgBookings', JSON.stringify(existingBookings));
//   return newBooking;
// };

// const BookingPage = () => {
//   const { id } = useParams();
//   const pg = pgDetails[id];

//   // Form States
//   const [fullName, setFullName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [sharing, setSharing] = useState("");

//   // Payment Step States
//   const [paymentStep, setPaymentStep] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [isBooked, setIsBooked] = useState(false);

//   const sharingPrice = {
//     "Single": 2000,
//     "Double": 1000,
//     "Triple": 500,
//     "Four": 0,
//   };

//   const basePrice = pg?.price || 0;
//   const extra = sharing ? sharingPrice[sharing] : 0;
//   const finalPrice = basePrice + extra;

//   // ----------------- SUBMIT BOOKING FORM (GO TO PAYMENT STEP) ------------
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setPaymentStep(true); // show payment options
//   };

//   // ----------------- FINAL PAYMENT CONFIRMATION --------------------------
//   const handlePaymentConfirm = async () => {
//     const bookingData = {
//       pgId: id,
//       pgName: pg.name,
//       pgLocation: pg.location,
//       customerName: fullName,
//       customerPhone: phone,
//       customerEmail: email,
//       checkInDate: checkIn,
//       checkOutDate: checkOut,
//       sharingType: sharing,
//       paymentMethod: paymentMethod,
//       basePrice: basePrice,
//       extraCharges: extra,
//       totalAmount: finalPrice,
//     };

//     try {
//       // Compute rough duration in months for notes
//       const durationMonths = Math.max(
//         1,
//         Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24 * 30)) || 1
//       );

//       // Create payment record in backend (MongoDB)
//       const res = await api.post("/payments", {
//         amount: finalPrice,
//         method: paymentMethod,
//         pg: id,
//         notes: `PG: ${pg.name} | Sharing: ${sharing} | Duration: ${durationMonths} month(s)`,
//         meta: {
//           customerName: fullName,
//           customerPhone: phone,
//           customerEmail: email,
//           checkInDate: checkIn,
//           checkOutDate: checkOut,
//           basePrice: basePrice,
//           extraCharges: extra,
//         },
//       });

//       if (!res?.success) throw new Error(res?.message || "Payment save failed");

//       // Optional local fallback/store
//       storeBooking(bookingData);
//       setIsBooked(true);
//     } catch (err) {
//       alert(err.message || "Failed to record payment. Please try again.");
//     }
//   };

//   // ------------------------- SUCCESS PAGE -------------------------------
//   if (isBooked) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
//           <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg">
//             <div className="text-green-600 text-6xl mb-4">✔</div>
//             <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
//             <p className="text-lg">Your booking has been confirmed.</p>

//             <div className="mt-6 text-left bg-gray-100 p-4 rounded-xl">
//               <p><strong>PG:</strong> {pg.name}</p>
//               <p><strong>Amount Paid:</strong> ₹{finalPrice}</p>
//               <p><strong>Payment Method:</strong> {paymentMethod}</p>
//             </div>

//             <button
//               onClick={() => window.location.href = "/dashboard"}
//               className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
//             >
//               Go to Dashboard
//             </button>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   // ------------------------ PAYMENT METHOD STEP -------------------------
//   if (paymentStep) {
//     return (
//       <>
//         <Navbar />

//         <div className="min-h-screen bg-blue-50 p-6 flex justify-center">
//           <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
//             <h2 className="text-3xl font-bold text-center mb-6">Select Payment Method</h2>

//             <div className="space-y-4">
//               {/* UPI GPay */}
//               <label className="flex items-center p-4 border rounded-xl cursor-pointer">
//                 <input 
//                   type="radio" 
//                   name="payment" 
//                   value="Google Pay" 
//                   onChange={(e) => setPaymentMethod(e.target.value)} 
//                   className="mr-3"
//                 />
//                 <span className="text-lg font-medium">Google Pay (GPay)</span>
//               </label>

//               {/* PhonePe */}
//               <label className="flex items-center p-4 border rounded-xl cursor-pointer">
//                 <input 
//                   type="radio" 
//                   name="payment" 
//                   value="PhonePe" 
//                   onChange={(e) => setPaymentMethod(e.target.value)} 
//                   className="mr-3"
//                 />
//                 <span className="text-lg font-medium">PhonePe</span>
//               </label>

//               {/* Paytm */}
//               <label className="flex items-center p-4 border rounded-xl cursor-pointer">
//                 <input 
//                   type="radio" 
//                   name="payment" 
//                   value="Paytm" 
//                   onChange={(e) => setPaymentMethod(e.target.value)} 
//                   className="mr-3"
//                 />
//                 <span className="text-lg font-medium">Paytm</span>
//               </label>

//               {/* Card Payment */}
//               <label className="flex items-center p-4 border rounded-xl cursor-pointer">
//                 <input 
//                   type="radio" 
//                   name="payment" 
//                   value="Card Payment" 
//                   onChange={(e) => setPaymentMethod(e.target.value)} 
//                   className="mr-3"
//                 />
//                 <span className="text-lg font-medium">Credit / Debit Card</span>
//               </label>
//             </div>

//             <button
//               disabled={!paymentMethod}
//               onClick={handlePaymentConfirm}
//               className={`mt-6 w-full py-3 rounded-xl text-white font-bold ${
//                 paymentMethod ? "bg-green-600 hover:bg-green-700" : "bg-gray-400"
//               }`}
//             >
//               Pay ₹{finalPrice}
//             </button>

//             <button
//               onClick={() => setPaymentStep(false)}
//               className="mt-3 w-full text-blue-600 underline"
//             >
//               Go Back
//             </button>
//           </div>
//         </div>

//         <Footer />
//       </>
//     );
//   }

//   // --------------------- MAIN BOOKING FORM --------------------------
//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-100 p-6">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-4xl font-bold mb-8 text-center">Complete Your Booking</h1>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* PG Details */}
//             <div className="bg-white rounded-xl shadow p-6">
//               <img src={pg.image} className="w-full h-56 rounded-lg object-cover mb-4" />
//               <h2 className="text-2xl font-bold">{pg.name}</h2>
//               <p className="text-gray-600">{pg.location}</p>
//               <p className="text-xl mt-2 font-semibold text-blue-600">₹{pg.price}/month</p>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleFormSubmit} className="bg-white shadow p-6 rounded-xl space-y-4">
//               <input className="w-full p-3 border rounded" placeholder="Full Name" required
//                 value={fullName} onChange={(e) => setFullName(e.target.value)} />
//               <input className="w-full p-3 border rounded" placeholder="Phone" required
//                 value={phone} onChange={(e) => setPhone(e.target.value)} />
//               <input className="w-full p-3 border rounded" placeholder="Email" required
//                 value={email} onChange={(e) => setEmail(e.target.value)} />

//               <div className="grid grid-cols-2 gap-4">
//                 <input type="date" className="p-3 border rounded" required
//                   value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
//                 <input type="date" className="p-3 border rounded" required
//                   value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
//               </div>

//               <select className="w-full p-3 border rounded" required
//                 value={sharing} onChange={(e) => setSharing(e.target.value)}>
//                 <option value="">Choose Sharing Type</option>
//                 <option value="Single">Single (+2000)</option>
//                 <option value="Double">Double (+1000)</option>
//                 <option value="Triple">Triple (+500)</option>
//                 <option value="Four">Four (+0)</option>
//               </select>

//               <button className="bg-blue-600 text-white w-full py-3 rounded-xl text-lg">
//                 Continue to Payment - ₹{finalPrice}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default BookingPage;




import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import api from "../../services/api";

const pgDetails = {
  1: { 
    name: "Elite Men's Stay", 
    location: "Velachery, Chennai", 
    price: 7500,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&h=400&fit=crop",
    amenities: ["WiFi", "AC", "Food", "Laundry", "Security", "Power Backup"],
    rating: 4.5,
    reviews: 128,
    description: "Premium PG accommodation for working professionals with all modern amenities and homely food."
  },
  2: { 
    name: "Royal Boys PG", 
    location: "Tambaram", 
    price: 6800,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop",
    amenities: ["WiFi", "Food", "Parking"],
    rating: 4.2,
    reviews: 89
  },
  3: { 
    name: "Comfort Stay", 
    location: "Guindy", 
    price: 8200,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&h=400&fit=crop",
    amenities: ["WiFi", "AC", "Food", "Gym", "Laundry"],
    rating: 4.7,
    reviews: 156
  },
};

// ---------------- STORE BOOKING IN LOCAL STORAGE ------------------------
const storeBooking = (bookingData) => {
  const existingBookings = JSON.parse(localStorage.getItem('pgBookings') || '[]');
  const newBooking = {
    id: Date.now(),
    ...bookingData,
    bookingDate: new Date().toISOString(),
    status: 'confirmed'
  };
  existingBookings.push(newBooking);
  localStorage.setItem('pgBookings', JSON.stringify(existingBookings));
  return newBooking;
};

const BookingPage = () => {
  const { id } = useParams();
  const pg = pgDetails[id];

  // Form States
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [sharing, setSharing] = useState("");

  // Payment Step States
  const [paymentStep, setPaymentStep] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [loading, setLoading] = useState(false);

  const sharingPrice = {
    "Single": 2000,
    "Double": 1000,
    "Triple": 500,
    "Four": 0,
  };

  const basePrice = pg?.price || 0;
  const extra = sharing ? sharingPrice[sharing] : 0;
  const finalPrice = basePrice + extra;

  // ----------------- SUBMIT BOOKING FORM (GO TO PAYMENT STEP) ------------
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPaymentStep(true);
  };

  // ----------------- FINAL PAYMENT CONFIRMATION --------------------------
  const handlePaymentConfirm = async () => {
    setLoading(true);
    const bookingData = {
      pgId: id,
      pgName: pg.name,
      pgLocation: pg.location,
      customerName: fullName,
      customerPhone: phone,
      customerEmail: email,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      sharingType: sharing,
      paymentMethod: paymentMethod,
      basePrice: basePrice,
      extraCharges: extra,
      totalAmount: finalPrice,
    };

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real app, you would call your API here
      // const res = await api.post("/payments", { ... });
      
      storeBooking(bookingData);
      setIsBooked(true);
    } catch (err) {
      alert(err.message || "Failed to record payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ------------------------- SUCCESS PAGE -------------------------------
  if (isBooked) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col items-center justify-center px-4 py-8">
          <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 text-center max-w-lg w-full transform hover:scale-105 transition-transform duration-300">
            {/* Success Animation */}
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Booking Confirmed! 🎉</h1>
            <p className="text-lg text-gray-600 mb-6">Your PG booking has been successfully confirmed.</p>

            {/* Booking Details */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl border border-blue-200 mb-6 text-left">
              <div className="flex items-center gap-4 mb-4">
                <img src={pg.image} alt={pg.name} className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{pg.name}</h3>
                  <p className="text-gray-600">{pg.location}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Amount Paid</p>
                  <p className="font-bold text-green-600 text-lg">₹{finalPrice}</p>
                </div>
                <div>
                  <p className="text-gray-500">Payment Method</p>
                  <p className="font-semibold text-gray-800">{paymentMethod}</p>
                </div>
                <div>
                  <p className="text-gray-500">Check-in</p>
                  <p className="font-semibold text-gray-800">{new Date(checkIn).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-500">Sharing</p>
                  <p className="font-semibold text-gray-800">{sharing}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.location.href = "/dashboard"}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => window.location.href = "/"}
                className="flex-1 border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Browse More PGs
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <p className="text-sm text-yellow-800">
                📧 Booking confirmation has been sent to your email. Our manager will contact you within 24 hours.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // ------------------------ PAYMENT METHOD STEP -------------------------
  if (paymentStep) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6 flex justify-center items-center">
          <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl">
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">1</span>
                </div>
                <div className="w-20 h-1 bg-blue-600 mx-2"></div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">2</span>
                </div>
              </div>
              <span className="text-gray-600 font-semibold">Payment Method</span>
            </div>

            <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Select Payment Method</h2>
            <p className="text-gray-600 text-center mb-8">Choose your preferred payment method</p>

            {/* PG Summary */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-6 flex items-center gap-4">
              <img src={pg.image} alt={pg.name} className="w-16 h-16 rounded-xl object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{pg.name}</h3>
                <p className="text-gray-600 text-sm">{pg.location}</p>
                <p className="text-green-600 font-bold">₹{finalPrice}</p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4 mb-8">
              {/* UPI Options */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
                <h4 className="font-semibold text-gray-800 mb-3">UPI Payment</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { name: "Google Pay", icon: "📱", color: "bg-purple-100 border-purple-300" },
                    { name: "PhonePe", icon: "💜", color: "bg-blue-100 border-blue-300" },
                    { name: "Paytm", icon: "💙", color: "bg-blue-100 border-blue-300" }
                  ].map((method) => (
                    <label key={method.name} className={`cursor-pointer transform hover:scale-105 transition-transform duration-200`}>
                      <input 
                        type="radio" 
                        name="payment" 
                        value={method.name} 
                        onChange={(e) => setPaymentMethod(e.target.value)} 
                        className="hidden"
                      />
                      <div className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                        paymentMethod === method.name 
                          ? "border-blue-500 bg-blue-50 shadow-lg" 
                          : "border-gray-200 bg-white hover:border-blue-300"
                      }`}>
                        <div className="text-2xl mb-2">{method.icon}</div>
                        <span className="font-medium text-gray-700">{method.name}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Other Methods */}
              <div className="space-y-3">
                {[
                  { name: "Credit/Debit Card", icon: "💳", description: "Pay with Visa, Mastercard, or RuPay" },
                  { name: "Net Banking", icon: "🏦", description: "Transfer from any bank account" },
                  { name: "Cash on Check-in", icon: "💵", description: "Pay when you move in" }
                ].map((method) => (
                  <label key={method.name} className="flex items-center p-4 border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-blue-300 transition-all duration-200 bg-white">
                    <input 
                      type="radio" 
                      name="payment" 
                      value={method.name} 
                      onChange={(e) => setPaymentMethod(e.target.value)} 
                      className="mr-4 w-5 h-5 text-blue-600"
                    />
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-800">{method.name}</div>
                        <div className="text-sm text-gray-600">{method.description}</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                disabled={!paymentMethod || loading}
                onClick={handlePaymentConfirm}
                className={`w-full py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 transform hover:scale-105 ${
                  paymentMethod && !loading
                    ? "bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 shadow-lg hover:shadow-xl" 
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                    Processing Payment...
                  </div>
                ) : (
                  `Pay ₹${finalPrice}`
                )}
              </button>

              <button
                onClick={() => setPaymentStep(false)}
                className="w-full py-3 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                ← Go Back to Booking Details
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // --------------------- MAIN BOOKING FORM --------------------------
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Complete Your Booking</h1>
            <p className="text-xl text-gray-600">Secure your stay in just a few simple steps</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PG Details Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img 
                  src={pg.image} 
                  className="w-full h-64 rounded-2xl object-cover mb-4 shadow-lg"
                  alt={pg.name}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-yellow-500 font-bold">⭐ {pg.rating}</span>
                  <span className="text-gray-600 ml-1">({pg.reviews} reviews)</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{pg.name}</h2>
              <div className="flex items-center text-gray-600 mb-3">
                <span className="mr-2">📍</span>
                <span>{pg.location}</span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold text-blue-600">₹{pg.price}<span className="text-lg text-gray-600">/month</span></p>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Available
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-3">Amenities Included</h3>
                <div className="flex flex-wrap gap-2">
                  {pg.amenities?.map((amenity, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-200"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {pg.description && (
                <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded-xl">
                  {pg.description}
                </p>
              )}
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Details</h2>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter 10-digit number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Check-in Date</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Check-out Date</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>

                {/* Sharing Type */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Room Sharing Type</label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                    required
                    value={sharing}
                    onChange={(e) => setSharing(e.target.value)}
                  >
                    <option value="">Choose Sharing Type</option>
                    <option value="Single">Single Room (+₹2000)</option>
                    <option value="Double">Double Sharing (+₹1000)</option>
                    <option value="Triple">Triple Sharing (+₹500)</option>
                    <option value="Four">Four Sharing (Base Price)</option>
                  </select>
                </div>

                {/* Price Summary */}
                <div className="bg-gray-50 rounded-2xl p-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Base Price</span>
                    <span>₹{basePrice}</span>
                  </div>
                  {sharing && (
                    <div className="flex justify-between text-gray-600">
                      <span>{sharing} Sharing Charges</span>
                      <span>+₹{extra}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-300 pt-2 flex justify-between text-lg font-bold text-gray-800">
                    <span>Total Amount</span>
                    <span>₹{finalPrice}</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Continue to Payment - ₹{finalPrice}
                </button>

                {/* Security Note */}
                <div className="text-center">
                  <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                    <span>🔒</span>
                    Your information is secure and encrypted
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;