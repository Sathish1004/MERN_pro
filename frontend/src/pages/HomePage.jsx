// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import PGCard from "../components/PGCard";
// const HomePage = () => {
//   const navigate = useNavigate();

//   const [searchText, setSearchText] = useState("");
//   const [gender, setGender] = useState("all");

//   // 🔥 Navigate with query params
//   const handleSearch = () => {
//     navigate(`/listings?gender=${gender}&search=${searchText}`);
//   };

//   const listings = [
//     {
//       id: 1,
//       title: "Premium Girls PG - Mylapore",
//       price: 9500,
//       location: "0.4 km from Mylapore Temple",
//       gender: "girls",
//       img: "https://i.pinimg.com/736x/a4/c4/e9/a4c4e9c92f37f6f094c019978cb01d11.jpg",
//       amenities: ["WiFi", "AC", "Food", "Laundry"],
//     },
//     {
//       id: 2,
//       title: "Executive Boys PG - T. Nagar",
//       price: 9000,
//       location: "0.9 km from T. Nagar Shopping Complex",
//       gender: "boys",
//       img: "https://i.pinimg.com/736x/f6/42/f7/f642f78c1dcdcfde4de821619d07d1d1.jpg",
//       amenities: ["WiFi", "Food", "Parking", "Gym"],
//     },
//     {
//       id: 3,
//       title: "Co-living Space - Adyar",
//       price: 12000,
//       location: "1.2 km from Adyar Bus Stand",
//       gender: "both",
//       img: "https://i.pinimg.com/736x/c5/db/d0/c5dbd061926572a4c4dff7e4b0ef2f59.jpg",
//       amenities: ["WiFi", "AC", "Food", "Gym", "Pool"],
//     },
//   ];

//   return (
//     <>
//       <Navbar />

//       {/*  Hero  */}
//      {/* HERO CTA SECTION */}
// {/* HERO CTA SECTION */}
// <div className="relative bg-gradient-to-br from-blue-400 via-red-400 to-blue-600 text-white overflow-hidden rounded-3xl mt-20">

//   {/* Dark Overlay */}
//   <div className="absolute inset-0 bg-black/20"></div>

//   {/* Floating Color Glow */}
//   <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-800 opacity-20 blur-3xl animate-pulse"></div>

//   {/* CTA Content */}
//   <div className="relative max-w-6xl mx-auto px-6 py-20 text-center z-10">

//     {/* Heading */}
//     <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
//       Still Searching for the Right PG?
//     </h2>
//     {/* Paragraph */}
//     <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
//       Don’t worry — we’ll help you!  
//       Discover the best PGs with reviews, prices, photos and amenities.
//     </p>
//     {/* SEARCH BAR */}
//     <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 mb-10">
//       <div className="flex flex-col md:flex-row gap-3">

//         {/* Location Search */}
//         <input
//           type="text"
//           placeholder="Search by location (eg: Anna Nagar, Adyar...)"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           className="flex-1 px-6 py-4 rounded-xl border-0 text-gray-900 
//           focus:ring-2 focus:ring-indigo-500"
//         />
//         {/* Gender Select */}
//         <select
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           className="px-6 py-4 rounded-xl border text-gray-800 bg-white 
//           focus:ring-2 focus:ring-indigo-500"
//         >
//           <option value="all">All</option>
//           <option value="boys">Boys</option>
//           <option value="girls">Girls</option>
//           <option value="both">Co-living</option>
//         </select>
//         {/* Search Button */}
//         <button
//           onClick={handleSearch}
//           className="bg-gradient-to-r from-yellow-400 to-orange-400 
//           text-gray-900 px-8 py-4 rounded-xl font-semibold 
//           hover:from-yellow-500 hover:to-orange-500 
//           transition-all duration-300 shadow-lg"
//         >
//           Search PGs
//         </button>
//       </div>
//     </div>
//     {/* CTA Button */}
//   </div>
// </div>
//       {/* Featured Listings   */}
//       <main className="min-h-screen bg-gray-50 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">
//               Featured PG Listings
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Handpicked accommodations with verified amenities and trusted
//               hosts
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {listings.map((pg) => (
//               <PGCard key={pg.id} {...pg} />
//             ))}
//           </div>
//           {/* CTA Section */}
//           <div className="text-center mt-20">
//   <div className="
//       relative 
//       bg-white/10 backdrop-blur-xl 
//       border border-white/20 
//       rounded-3xl 
//       p-12 
//       text-white
//       shadow-[0_0_40px_rgba(99,102,241,0.4)]
//       overflow-hidden
//     "
//   >
//     {/* Floating Glow Animation */}
//     <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-pulse"></div>
//     {/* Headline */}
//   <h3 className="text-4xl font-extrabold mb-4 drop-shadow-md text-gray-900">
//   Still Searching for the Right PG?
// </h3>
// <p className="text-gray-800 text-lg mb-10 max-w-2xl mx-auto">
//   Don’t worry — we’ll guide you!  
//   Explore all PGs in your area with prices, reviews, images & amenities.
// </p>
//     {/* CTA BUTTON */}
//     <button
//       className="
//         relative overflow-hidden 
//         px-10 py-4 
//         rounded-2xl 
//         font-semibold 
//         bg-white text-indigo-700
//         shadow-xl hover:shadow-2xl 
//         transition-all duration-500 
//         group
//       "
//     >
//       <span className="relative z-20 flex items-center gap-2 text-lg">
//         Visit Listings Page  
//         <svg 
//           className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2" 
//           fill="none" stroke="currentColor" viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </span>

//       <span
//         className="
//           absolute inset-0 
//           bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
//           translate-y-[100%] 
//           group-hover:translate-y-0 
//           transition-transform duration-500
//           z-10 opacity-90
//         "
//       ></span>
//     </button>

//     {/* Helpful Hint */}
//     <p className="text-black text-sm mt-4 opacity-80">
//   (Click the button above to explore all available PGs in Chennai)
// </p>
//   </div>
// </div>
//         </div>
//       </main>

//     </>
//   );
// };

// export default HomePage;




//2 


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import PGCard from "../components/PGCard";

// const HomePage = () => {
//   const navigate = useNavigate();

//   const [searchText, setSearchText] = useState("");
//   const [gender, setGender] = useState("all");
//   const [sortBy, setSortBy] = useState("none");

//   const listings = [
//     {
//       id: 1,
//       title: "Premium Girls PG - Mylapore",
//       price: 9500,
//       location: "0.4 km from Mylapore Temple",
//       gender: "girls",
//       img: "https://i.pinimg.com/736x/a4/c4/e9/a4c4e9c92f37f6f094c019978cb01d11.jpg",
//       amenities: ["WiFi", "AC", "Food", "Laundry"],
//     },
//     {
//       id: 2,
//       title: "Executive Boys PG - T. Nagar",
//       price: 9000,
//       location: "0.9 km from T. Nagar Shopping Complex",
//       gender: "boys",
//       img: "https://i.pinimg.com/736x/f6/42/f7/f642f78c1dcdcfde4de821619d07d1d1.jpg",
//       amenities: ["WiFi", "Food", "Parking", "Gym"],
//     },
//     {
//       id: 3,
//       title: "Co-living Space - Adyar",
//       price: 12000,
//       location: "1.2 km from Adyar Bus Stand",
//       gender: "both",
//       img: "https://i.pinimg.com/736x/c5/db/d0/c5dbd061926572a4c4dff7e4b0ef2f59.jpg",
//       amenities: ["WiFi", "AC", "Food", "Gym", "Pool"],
//     },
//   ];

//   const [filteredListings, setFilteredListings] = useState(listings);

//   // 🔥 APPLY SEARCH + FILTER + SORT
//   const applyFilters = () => {
//     let data = [...listings];

//     // 🔍 Search filter
//     if (searchText.trim() !== "") {
//       data = data.filter(
//         (pg) =>
//           pg.location.toLowerCase().includes(searchText.toLowerCase()) ||
//           pg.title.toLowerCase().includes(searchText.toLowerCase())
//       );
//     }

//     // 🚻 Gender filter
//     if (gender !== "all") {
//       data = data.filter((pg) => pg.gender === gender);
//     }

//     // 💸 Price sorting
//     if (sortBy === "low") {
//       data.sort((a, b) => a.price - b.price);
//     } else if (sortBy === "high") {
//       data.sort((a, b) => b.price - a.price);
//     }

//     setFilteredListings(data);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [searchText, gender, sortBy]);

//   return (
//     <>
//       <Navbar />

//       {/* HERO CTA SECTION */}
//       <div className="relative bg-gradient-to-br from-blue-400 via-red-400 to-blue-600 text-white overflow-hidden rounded-3xl mt-20">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-800 opacity-20 blur-3xl animate-pulse"></div>

//         <div className="relative max-w-6xl mx-auto px-6 py-20 text-center z-10">
//           <h2 className="text-4xl md:text-5xl text -green-200 font-extrabold mb-6 drop-shadow-lg">
//             Comfort Zone for Your Stay
//           </h2>
//           <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
//             Don’t worry — we’ll help you! Discover the best PGs with reviews,
//             prices, photos and amenities.
//           </p>

//           {/* 🔍 SEARCH BAR */}
//           <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 mb-10">
//             <div className="flex flex-col md:flex-row gap-3">

//               <input
//                 type="text"
//                 placeholder="Search by location (eg: Anna Nagar, Adyar...)"
//                 value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)}
//                 className="flex-1 px-6 py-4 rounded-xl border-0 text-gray-900 
//                 focus:ring-2 focus:ring-indigo-500"
//               />

//               <select
//                 value={gender}
//                 onChange={(e) => setGender(e.target.value)}
//                 className="px-6 py-4 rounded-xl border text-gray-800 bg-white 
//                 focus:ring-2 focus:ring-indigo-500"
//               >
//                 <option value="all">All</option>
//                 <option value="boys">Boys</option>
//                 <option value="girls">Girls</option>
//                 <option value="both">Co-living</option>
//               </select>

//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="px-6 py-4 rounded-xl border text-gray-800 bg-white 
//                 focus:ring-2 focus:ring-indigo-500"
//               >
//                 <option value="none">Sort By</option>
//                 <option value="low">Price: Low → High</option>
//                 <option value="high">Price: High → Low</option>
//               </select>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* PG LISTINGS */}
     
//     </>
//   );
// };

// export default HomePage;






//3

// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const HomePage = () => {
//   const [searchText, setSearchText] = useState("");
//   const [gender, setGender] = useState("all");
//   const [sortBy, setSortBy] = useState("none");

//   // 🔥 BOYS / GIRLS / CO-LIVING IMAGES
//   const boysImages = [
//     "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
//     "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
//     "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800",
//     "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
//   ];

//   const girlsImages = [
//     "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800",
//     "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
//     "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800",
//     "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
//   ];

//   const colivingImages = [
//     "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
//     "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
//     "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800",
//     "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800",
//   ];

//   // 🔥 FEATURES
//   const pgFeatures = {
//     boys: ["24/7 Security", "High-Speed WiFi", "Gym Access", "Food Service"],
//     girls: ["Women Security", "CCTV", "Laundry", "Kitchen"],
//     coliving: ["Common Workspace", "Events", "Game Room", "Networking"]
//   };

//   // 🔥 ALL PG LISTINGS (MERGED)
//   const listings = [
//     {
//       id: 1,
//       title: "Premium Boys PG",
//       price: 7500,
//       location: "Velachery, Chennai",
//       gender: "boys",
//       images: boysImages,
//       features: pgFeatures.boys,
//       color: "blue",
//       rating: 4.5,
//       reviews: 128,
//       distance: "0.8 km from metro"
//     },
//     {
//       id: 2,
//       title: "Luxury Girls PG",
//       price: 8000,
//       location: "Anna Nagar, Chennai",
//       gender: "girls",
//       images: girlsImages,
//       features: pgFeatures.girls,
//       color: "pink",
//       rating: 4.8,
//       reviews: 95,
//       distance: "0.5 km from mall"
//     },
//     {
//       id: 3,
//       title: "Modern Co-Living Space",
//       price: 10000,
//       location: "Guindy, Chennai",
//       gender: "both",
//       images: colivingImages,
//       features: pgFeatures.coliving,
//       color: "purple",
//       rating: 4.7,
//       reviews: 156,
//       distance: "1.2 km from IT park"
//     },
//   ];

//   const [filteredListings, setFilteredListings] = useState(listings);

//   // 🎯 SEARCH + FILTER + SORT
//   const applyFilters = () => {
//     let data = [...listings];

//     if (searchText.trim() !== "") {
//       data = data.filter(
//         (pg) =>
//           pg.title.toLowerCase().includes(searchText.toLowerCase()) ||
//           pg.location.toLowerCase().includes(searchText.toLowerCase())
//       );
//     }

//     if (gender !== "all") {
//       data = data.filter((pg) => pg.gender === gender || pg.gender === "both");
//     }

//     if (sortBy === "low") {
//       data.sort((a, b) => a.price - b.price);
//     } else if (sortBy === "high") {
//       data.sort((a, b) => b.price - a.price);
//     }

//     setFilteredListings(data);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [searchText, gender, sortBy]);

//   // ⭐ Reusable PG Card 
//   const PGCard = ({ pg }) => {
//     const { title, price, location, images, features, color, rating, reviews, distance } = pg;
//     const [currentImage, setCurrentImage] = useState(0);

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCurrentImage((prev) => (prev + 1) % images.length);
//       }, 3000);
//       return () => clearInterval(interval);
//     }, []);

//     const colorClasses = {
//       blue: {
//         bg: 'bg-blue-500',
//         text: 'text-blue-600',
//         light: 'bg-blue-50',
//         border: 'border-blue-200',
//         button: 'bg-blue-600 hover:bg-blue-700'
//       },
//       pink: {
//         bg: 'bg-pink-500',
//         text: 'text-pink-600',
//         light: 'bg-pink-50',
//         border: 'border-pink-200',
//         button: 'bg-pink-600 hover:bg-pink-700'
//       },
//       purple: {
//         bg: 'bg-purple-500',
//         text: 'text-purple-600',
//         light: 'bg-purple-50',
//         border: 'border-purple-200',
//         button: 'bg-purple-600 hover:bg-purple-700'
//       }
//     };

//     const currentColor = colorClasses[color];

//     return (
//       <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-all duration-500 border ${currentColor.border} group`}>
//         {/* Image Slider */}
//         <div className="relative h-72 overflow-hidden">
//           <img
//             src={images[currentImage]}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />
          
//           {/* Image Indicators */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {images.map((_, index) => (
//               <div
//                 key={index}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   index === currentImage ? 'bg-white' : 'bg-white/50'
//                 }`}
//               />
//             ))}
//           </div>

//           {/* Badge */}
//           <div className="absolute top-4 left-4">
//             <span className={`px-3 py-1 rounded-full text-white font-semibold text-sm ${currentColor.bg} shadow-lg`}>
//               {pg.gender === 'both' ? 'Co-Living' : `${pg.gender.charAt(0).toUpperCase() + pg.gender.slice(1)}`}
//             </span>
//           </div>

//           {/* Rating */}
//           <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
//             <span className="text-yellow-500">⭐</span>
//             <span className="font-bold text-gray-800">{rating}</span>
//             <span className="text-gray-500 text-sm">({reviews})</span>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           <div className="flex justify-between items-start mb-3">
//             <div>
//               <h3 className={`text-2xl font-bold ${currentColor.text} mb-1`}>{title}</h3>
//               <div className="flex items-center text-gray-600 mb-2">
//                 <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                 </svg>
//                 <span className="text-sm">{location}</span>
//               </div>
//               <p className="text-gray-500 text-xs">{distance}</p>
//             </div>
//           </div>

//           {/* Price */}
//           <div className="flex items-baseline mb-4">
//             <span className="text-3xl font-bold text-gray-900">₹{price}</span>
//             <span className="text-gray-500 ml-2">/ month</span>
//           </div>

//           {/* Features */}
//           <div className="flex flex-wrap gap-2 mb-6">
//             {features.map((f, i) => (
//               <span 
//                 key={i} 
//                 className={`px-3 py-2 text-xs font-medium rounded-lg ${currentColor.light} ${currentColor.text} border ${currentColor.border}`}
//               >
//                 {f}
//               </span>
//             ))}
//           </div>

//           {/* Button */}
//           <button className={`w-full py-4 rounded-xl ${currentColor.button} text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}>
//             View Details & Book Now
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <Navbar />

//       {/* Enhanced Hero Section */}
//       <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
//         {/* Background Decorations */}
//         <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
//         <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//         <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
//         <div className="relative pt-32 pb-20 px-4">
//           <div className="max-w-6xl mx-auto text-center">
//             {/* Main Heading */}
//             <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//               Find Your Perfect
//               <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 PG in Chennai
//               </span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//               Discover premium boys, girls, and co-living spaces with top-notch amenities, verified hosts, and the best locations.
//             </p>

    
//             {/* Enhanced Search Bar */}
//             <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-white/60">
//               <div className="flex flex-col md:flex-row gap-4 items-center">
//                 <div className="flex-1 relative w-full">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                   </div>
//                   <input
//                     type="text"
//                     placeholder="Search by location or PG name..."
//                     className="w-full pl-12 pr-4 py-4 border-0 rounded-2xl bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
//                     value={searchText}
//                     onChange={(e) => setSearchText(e.target.value)}
//                   />
//                 </div>

//                 <div className="relative w-full md:w-48">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                     </svg>
//                   </div>
//                   <select
//                     className="w-full pl-12 pr-4 py-4 border-0 rounded-2xl bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none transition-all duration-300"
//                     value={gender}
//                     onChange={(e) => setGender(e.target.value)}
//                   >
//                     <option value="all">All Types</option>
//                     <option value="boys">Boys PG</option>
//                     <option value="girls">Girls PG</option>
//                     <option value="both">Co-Living</option>
//                   </select>
//                 </div>

//                 <div className="relative w-full md:w-48">
//                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                     <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
//                     </svg>
//                   </div>
//                   <select
//                     className="w-full pl-12 pr-4 py-4 border-0 rounded-2xl bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none transition-all duration-300"
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                   >
//                     <option value="none">Sort By</option>
//                     <option value="low">Price: Low to High</option>
//                     <option value="high">Price: High to Low</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Listings Section */}
//       <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Premium PGs</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Handpicked accommodations with verified amenities, trusted hosts, and prime locations across Chennai.
//             </p>
//           </div>

//           {/* Listings Grid */}
//           {filteredListings.length === 0 ? (
//             <div className="text-center py-20">
//               <div className="text-8xl mb-6">🔍</div>
//               <h3 className="text-3xl font-bold text-gray-700 mb-4">No PGs Found</h3>
//               <p className="text-gray-500 text-lg mb-8">Try adjusting your search criteria to find more options.</p>
//               <button 
//                 onClick={() => {
//                   setSearchText("");
//                   setGender("all");
//                   setSortBy("none");
//                 }}
//                 className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors duration-300"
//               >
//                 Reset Filters
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredListings.map((pg) => (
//                 <PGCard key={pg.id} pg={pg} />
//               ))}
//             </div>
//           )}

//           {/* CTA Section */}
//           <div className="text-center mt-20">
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
//               <h3 className="text-3xl md:text-4xl font-bold mb-4">Can't Find Your Perfect PG?</h3>
//               <p className="text-blue-100 text-xl mb-8">Let us help you find the perfect match based on your preferences.</p>
//               <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-2xl">
//                 Get Personalized Help
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default HomePage;


 //4 




 import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [gender, setGender] = useState("all");

  // Images
  const boysImages = [
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800",
  ];

  const girlsImages = [
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800",
  ];

  const colivingImages = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800",
  ];

  // Enhanced Listings with neighborhood details
  const listings = [
    {
      id: 1,
      title: "Premium Boys PG",
      location: "Velachery, Chennai",
      gender: "boys",
      images: boysImages,
      color: "blue",
      rating: 4.5,
      reviews: 128,
      amenities: ["WiFi", "AC", "Gym", "Food"],
      nearby: {
        hospitals: ["Apollo Hospital - 2 km", "MIOT Hospital - 3 km"],
        touristPlaces: ["Marina Beach - 8 km", "Santhome Church - 6 km"],
        offices: ["Tidel Park - 4 km", "DLF IT Park - 5 km"],
        metro: "Velachery Metro - 0.8 km",
        mall: "Phoenix Marketcity - 3 km"
      },
      highlights: ["24/7 Security", "Power Backup", "Laundry Service"]
    },
    {
      id: 2,
      title: "Luxury Girls PG",
      location: "Anna Nagar, Chennai",
      gender: "girls",
      images: girlsImages,
      color: "pink",
      rating: 4.8,
      reviews: 95,
      amenities: ["WiFi", "AC", "CCTV", "Kitchen"],
      nearby: {
        hospitals: ["Vijaya Hospital - 1.5 km", "Apollo Hospital - 3 km"],
        touristPlaces: ["Anna Nagar Tower Park - 0.5 km", "Thirumayilai - 4 km"],
        offices: ["Ambattur Industrial Estate - 6 km", "Anna Salai - 5 km"],
        metro: "Anna Nagar Metro - 1.2 km",
        mall: "Spencer Plaza - 4 km"
      },
      highlights: ["Women Security", "Housekeeping", "Power Backup"]
    },
    {
      id: 3,
      title: "Modern Co-Living Space",
      location: "Guindy, Chennai",
      gender: "both",
      images: colivingImages,
      color: "purple",
      rating: 4.7,
      reviews: 156,
      amenities: ["WiFi", "AC", "Workspace", "Gym"],
      nearby: {
        hospitals: ["SIMs Hospital - 2 km", "Apollo Hospital - 3 km"],
        touristPlaces: ["Guindy National Park - 1 km", "Race Course - 2 km"],
        offices: ["DLF IT Park - 1 km", "Tidel Park - 3 km", "SP Infocity - 2 km"],
        metro: "Guindy Metro - 0.5 km",
        mall: "Forum Vijaya Mall - 2 km"
      },
      highlights: ["Community Events", "Game Room", "High-speed WiFi"]
    },
  ];

  const [filteredListings, setFilteredListings] = useState(listings);

  // Filter → Search + Gender
  const applyFilters = () => {
    let data = [...listings];

    if (searchText.trim() !== "") {
      data = data.filter(
        (pg) =>
          pg.title.toLowerCase().includes(searchText.toLowerCase()) ||
          pg.location.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (gender !== "all") {
      data = data.filter((pg) => pg.gender === gender || pg.gender === "both");
    }

    setFilteredListings(data);
  };

  useEffect(() => {
    applyFilters();
  }, [searchText, gender]);

  // ⭐ ENHANCED CARD WITH NEIGHBORHOOD DETAILS
  const PGCard = ({ pg }) => {
    const { title, location, images, gender, color, rating, amenities, nearby, highlights } = pg;
    const [index, setIndex] = useState(0);
    const [showNeighborhood, setShowNeighborhood] = useState(false);

    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(timer);
    }, []);

    const colorClasses = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
      pink: { bg: 'bg-pink-600', text: 'text-pink-600', light: 'bg-pink-50', border: 'border-pink-200' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200' }
    };

    const currentColor = colorClasses[color];

    return (
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
        
        {/* Image Slider with Overlay */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={images[index]}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            alt={title}
          />

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Gender Badge */}
          <span className={`absolute top-4 left-4 px-4 py-2 rounded-full text-white font-bold shadow-lg ${currentColor.bg}`}>
            {gender === "both" ? "Co-Living" : gender.toUpperCase()}
          </span>

          {/* Rating Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
            <span className="text-yellow-500"></span>
            <span className="font-bold text-gray-800">{rating}</span>
          
          </div>

          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              Quick View
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title and Location */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">{location}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-4">
            {highlights.map((highlight, i) => (
              <span key={i} className={`px-3 py-1 text-xs font-medium rounded-full ${currentColor.light} ${currentColor.text} border ${currentColor.border}`}>
                {highlight}
              </span>
            ))}
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-2">  <b className=""> Key Amenities</b> </h4>
            <div className="flex flex-wrap gap-2">
              {amenities.map((amenity, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Neighborhood Toggle */}
          <div className="border-t border-gray-100 pt-4">
            <button
              onClick={() => setShowNeighborhood(!showNeighborhood)}
              className="flex items-center justify-between w-full text-left mb-2"
            >
              <span className="font-semibold text-gray-700"> <b className="text-green-500">E</b>xplore - Nearby Places</span>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${showNeighborhood ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Neighborhood Details */}
            {showNeighborhood && (
              <div className="space-y-3 animate-fadeIn">
                {/* Hospitals */}
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-xs">🏥</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">  <b className="text-green-600">H</b>ospitals</p>
                    <p className="text-xs text-gray-600">{nearby.hospitals.join(', ')}</p>
                  </div>
                </div>

                {/* Tourist Places */}
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-xs">🏛️</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">  <b className="text-green-600">T</b>ourist Places</p>
                    <p className="text-xs text-gray-600">{nearby.touristPlaces.join(', ')}</p>
                  </div>
                </div>

                {/* Offices */}
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-xs">🏢</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700"> <b className="text-green-700">IT</b>Parks & Offices</p>
                    <p className="text-xs text-gray-600">{nearby.offices.join(', ')}</p>
                  </div>
                </div>

                {/* Transport & Mall */}
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="flex items-center space-x-1">
                    <span className="text-xs">🚇</span>
                    <span className="text-xs text-gray-600">{nearby.metro}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs">🛍️</span>
                    <span className="text-xs text-gray-600">{nearby.mall}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

  
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />

      {/* Enhanced Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PG in Chennai
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover premium PGs with complete neighborhood insights - hospitals, offices, transport & more at your fingertips.
          </p>

          {/* Enhanced Search Box */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                  placeholder="Search PG or Location..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>

              <div className="relative w-full md:w-48">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <select
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white appearance-none transition-all duration-300"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="boys">Boys PG</option>
                  <option value="girls">Girls PG</option>
                  <option value="both">Co-Living</option>
                </select>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">Boys</div>
              <div className="text-shadow-gray-100">Classy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">Girls</div>
              <div className="text-gray-800">Secured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">CoLiving</div>
              <div className="text-gray-800">Spacious-Nest</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Listing Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Premium PGs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete neighborhood insights with hospitals, offices, transport and tourist places nearby.
            </p>
          </div>

          {filteredListings.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-bold text-gray-700 mb-4">No PGs Found</h3>
              <p className="text-gray-500 text-lg">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map((pg) => (
                <PGCard key={pg.id} pg={pg} />
              ))}
            </div>
          )}
        </div>
      </div>

    </>
  );
};

export default HomePage;