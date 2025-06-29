"use client"

export function RainbowButton() {
  return (
    <button
      type="submit"
      className="relative flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold border-2 border-gray-200 rounded-full px-6 py-3 overflow-hidden group hover:shadow-2xl transition-all duration-300"
    >
      <span className="relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
        Explore 
      </span>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-2 -bottom-2 -left-2 -right-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Background fill effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
      
      <svg
        className="relative z-10 w-6 h-6 text-gray-800 group-hover:text-white transition-colors duration-300 group-hover:rotate-90 transition-transform duration-300"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}
