'use client';

export default function Footer() {
  return (
    <footer className="w-full text-white bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold">Homora Interiors</h3>
          <p className="text-sm mt-1">Transforming spaces into personalized sanctuaries from Kochi.</p>
        </div>

        <div className="text-sm">
          &copy; {new Date().getFullYear()} Homora Interiors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
