
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => (
  <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform skew-y-3 scale-125"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 text-center relative z-10">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-xl rounded-2xl px-8 py-4 shadow-2xl shadow-blue-500/20 mb-8 border border-white/40">
            <div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-indigo-700 bg-clip-text text-transparent">
              About Chennai PG
            </h1>
          </div>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
            Your perfect home away from home. We connect students and professionals with 
            <span className="font-semibold text-indigo-600"> safe, affordable, and comfortable</span> paying guest accommodations 
            across Chennai's prime locations.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/60 hover:border-indigo-200 hover:-translate-y-2">
            <div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Wide Selection</h3>
            <p className="text-slate-600 leading-relaxed">
              Choose from hundreds of verified PG accommodations across all major areas in Chennai - from Anna Nagar to OMR.
            </p>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/60 hover:border-green-200 hover:-translate-y-2">
            <div >
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Safe & Verified</h3>
            <p className="text-slate-600 leading-relaxed">
              All listings are thoroughly verified with background checks to ensure your safety and peace of mind.
            </p>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/60 hover:border-amber-200 hover:-translate-y-2">
            <div >
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Budget Friendly</h3>
            <p className="text-slate-600 leading-relaxed">
              Find accommodations starting from ₹5,000/month without compromising on quality and essential amenities.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-white to-blue-50/50 rounded-3xl shadow-2xl p-12 text-center border border-white/60 mb-20 backdrop-blur-sm">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-indigo-700 bg-clip-text text-transparent mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            We believe that finding the right PG should be simple, transparent, and stress-free. 
            Our platform connects tenants with trusted PG owners, providing detailed information, 
            photos, and genuine reviews to help you make the best decision for your stay in Chennai.
          </p>
        </div>

        {/* Neighborhood Amenities Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-indigo-700 bg-clip-text text-transparent mb-4">
              Prime Location Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our PGs are strategically located near all essential amenities for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Shopping Malls */}
            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-orange-200">
              <div className="flex items-center gap-4 mb-6">
                <div >
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Shopping Malls</h3>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Live within walking distance from premium shopping destinations and entertainment hubs.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Phoenix MarketCity - 5 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Forum Vijaya Mall - 8 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Express Avenue - 15 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  VR Chennai - 10 mins drive
                </li>
              </ul>
            </div>

            {/* Beaches */}
            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-cyan-100 hover:border-cyan-200">
              <div className="flex items-center gap-4 mb-6">
                <div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Beaches</h3>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Enjoy Chennai's beautiful coastline with easy access to serene beaches for relaxation.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Marina Beach - 20 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Besant Nagar Beach - 25 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Covelong Beach - 30 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Thiruvanmiyur Beach - 15 mins drive
                </li>
              </ul>
            </div>

            {/* Parks & Recreation */}
            <div className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-100 hover:border-emerald-200">
              <div className="flex items-center gap-4 mb-6">
                <div >
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Parks & Recreation</h3>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Perfect spots for morning walks, evening relaxation, and weekend leisure activities.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Semmozhi Poonga - 10 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Guindy National Park - 12 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Anna Nagar Tower Park - 5 mins walk
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Chennai Rail Museum - 8 mins drive
                </li>
              </ul>
            </div>

            {/* IT Parks & Corporate Hubs */}
            <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-200">
              <div className="flex items-center gap-4 mb-6">
                <div >
                </div>
                <h3 className="text-2xl font-bold text-slate-800">IT Parks & Corporate Hubs</h3>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Ideal for professionals working in Chennai's major IT corridors and business districts.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  DLF IT Park, Ramapuram - 10 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Tidel Park, Taramani - 15 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Ascendas IT Park - 12 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  SP Infocity - 8 mins drive
                </li>
              </ul>
            </div>

            {/* Hospitals & Healthcare */}
            <div className="group bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-red-100 hover:border-red-200">
              <div className="flex items-center gap-4 mb-6">
                <div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Hospitals & Healthcare</h3>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                24/7 access to top-tier medical facilities and emergency healthcare services.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Apollo Hospitals, Greams Road - 15 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  MIOT International - 10 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Fortis Malar Hospital - 12 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Billroth Hospitals - 8 mins drive
                </li>
              </ul>
            </div>

            {/* Educational Institutions */}
            <div className="group bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-violet-100 hover:border-violet-200">
              <div className="flex items-center gap-4 mb-6">
                <div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Educational Institutions</h3>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Perfect for students with proximity to Chennai's premier colleges and universities.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                  Anna University - 10 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                  College of Engineering, Guindy - 12 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                  Loyola College - 15 mins drive
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
                  Presidency College - 18 mins drive
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Transportation Section */}
        <div className="bg-gradient-to-r from-slate-800 to-indigo-900 rounded-3xl p-12 text-white mb-20 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Excellent Connectivity</h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Easy access to all major transportation hubs and public transit options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl mb-3"></div>
              <h4 className="font-bold text-lg mb-2">Metro Stations</h4>
              <p className="text-slate-200">5-10 mins walk</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl mb-3"></div>
              <h4 className="font-bold text-lg mb-2">Bus Stops</h4>
              <p className="text-slate-200">2-5 mins walk</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl mb-3"></div>
              <h4 className="font-bold text-lg mb-2">Railway Stations</h4>
              <p className="text-slate-200">15-20 mins drive</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-3xl mb-3"></div>
              <h4 className="font-bold text-lg mb-2">Airport</h4>
              <p className="text-slate-200">25-30 mins drive</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-indigo-700 bg-clip-text text-transparent mb-12">
            Why Choose Chennai PG?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "", title: "4.8/5 Rating", desc: "Based on 2,000+ genuine reviews" },
              { icon: "", title: "Verified Listings", desc: "Every PG personally verified" },
              { icon: "", title: "24/7 Support", desc: "Round-the-clock customer care" },
              { icon: "", title: "Easy Booking", desc: "Instant confirmation process" }
            ].map((item, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutPage;