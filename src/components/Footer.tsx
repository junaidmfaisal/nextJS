'use client';

export default function Footer() {
  return (
    <footer className="w-full text-white bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap items-center justify-between gap-4 md:gap-0 text-center md:text-left space-y-4 md:space-y-0">
        
        {/* Brand Info */}
        <div className="w-full md:w-auto">
          <h3 className="text-xl font-semibold">Homora Interiors</h3>
          <p className="text-sm mt-1 max-w-sm mx-auto md:mx-0">
            Transforming spaces into personalized sanctuaries from Kochi.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm w-full md:w-auto">
          &copy; {new Date().getFullYear()} Homora Interiors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
