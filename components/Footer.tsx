export default function Footer() {
  return (
    <footer className="relative z-50 w-full h-[30vh] min-h-[120px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/footer.jpg"
        alt="Footer background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Footer Content (optional) */}
      <div className="relative z-10 flex h-full items-center justify-center text-white text-sm">
        © 2025 Your Company. All rights reserved.
      </div>

    </footer>
  );
}
