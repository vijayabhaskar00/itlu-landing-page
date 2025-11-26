import {  ArrowRight, Sparkles, Utensils } from 'lucide-react';

function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-100 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Animated Icon Container */}
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping opacity-20"></div>
          </div>
          <div className="relative flex items-center justify-center bg-[#ebe354] rounded-full shadow-2xl w-40 h-40">
            <img src='assets/img/logo.png' alt="Logo" className="w-28 h-28 object-contain z-10" />
            <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-bounce z-20" />
            <Utensils className="w-6 h-6 text-orange-500 absolute -bottom-1 -left-1 animate-pulse z-20" />
          </div>
        </div>

        {/* Main Heading with Enhanced Gradient */}
        <h1 className="text-6xl sm:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg animate-fade-in leading-tight">
          Coming Soon
        </h1>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
          <Sparkles className="w-5 h-5 text-amber-500" />
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
        </div>

        {/* Subheading */}
        <p className="text-2xl sm:text-3xl text-gray-800 mb-4 font-bold">
          Something <span className="text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text">delicious</span> is cooking...
        </p>

        <p className="text-lg sm:text-xl text-gray-700 mb-12 font-medium">
          Till then explore our <span className="text-orange-600 font-semibold">amazing menu</span>
        </p>

        {/* Enhanced CTA Button */}
        <button
          onClick={() => window.open('https://menu.itlu.us', '_blank')}
          className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="relative flex items-center gap-3 z-10">
            <Utensils className="w-6 h-6" />
            Visit Menu
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </button>

        {/* Secondary text */}
        <p className="mt-8 text-sm text-gray-600">
          ✨ Experience culinary excellence ✨
        </p>

        {/* Animated Loading Dots */}
        <div className="mt-12 flex justify-center gap-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 animate-bounce shadow-lg"
              style={{ animationDelay: `${i * 0.15}s` }}
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default ComingSoon;