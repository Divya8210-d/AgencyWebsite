export default function Footer() {
  return (
    <footer className="relative z-50 w-full min-h-[400px] overflow-hidden text-white font-sans">

      {/* Background Image */}
      <img
        src="/footer.jpg"
        alt="Footer background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col justify-between h-full">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-cyan-400">Devign Services</h2>
            <p className="text-gray-300 leading-relaxed max-w-sm font-poppins text-base">
              Crafting premium digital experiences that elevate your brand. We specialize in modern web design and development.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#aboutus" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
            <p className="text-gray-300">
              <a href="mailto:devignservices@gmail.com" className="hover:text-cyan-400 transition-colors">
                devignservices@gmail.com
              </a>
            </p>
            <div className="flex gap-4 mt-2">
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/devign_services/" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/company/devignservices/about/?viewAsMember=true" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 hover:text-black transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 DuoWebs. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
