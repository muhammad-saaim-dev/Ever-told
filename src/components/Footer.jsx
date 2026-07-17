import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-6 pb-2 border-t border-[#EBE4DD]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 pb-4 border-b border-[#EBE4DD]">
          
          {/* Logo & Description */}
          <div className="flex flex-col space-y-2 lg:w-[320px]">
            <Link href="/" className="flex items-center gap-3">
              <svg
                className="w-7 h-7 text-[#55624C]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-extrabold tracking-wide uppercase text-[#2C3E2D]">
                  Ever Told
                </span>
                <span className="text-[9px] font-bold tracking-widest uppercase text-[#5F6A5B] font-sans mt-0.5">
                  A Home for Every Legacy
                </span>
              </div>
            </Link>
            <p className="text-[11px] text-[#2C3E2D] leading-relaxed font-sans font-bold pr-4">
              A digital legacy studio dedicated to preserving life stories for generations to come.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <Link href="#" className="text-[#5F6A5B] hover:text-[#2C3E2D] transition-all duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </Link>
              <Link href="#" className="text-[#5F6A5B] hover:text-[#2C3E2D] transition-all duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.048 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.555.556.899 1.112 1.153 1.772.248.638.417 1.363.465 2.428.049 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.048 1.065-.217 1.79-.465 2.428-.254.66-.598 1.216-1.153 1.772-.556.555-1.112.899-1.772 1.153-.638.248-1.363.417-2.428.465-1.066.049-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.048-1.79-.217-2.428-.465-.66-.254-1.216-.598-1.772-1.153-.555-.556-.899-1.112-1.153-1.772-.248-.638-.417-1.363-.465-2.428C2.01 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.048-1.065.217-1.79.465-2.428.254-.66.598-1.216 1.153-1.772.556-.555 1.112-.899 1.772-1.153.638-.248 1.363-.417 2.428-.465C8.944 2.01 9.283 2 12 2zm0 1.802c-2.67 0-2.987.01-4.042.059-.975.044-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.059 1.372-.059 4.042 0 2.67.01 2.987.059 4.042.044.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.055.048 1.372.059 4.042.059 2.67 0 2.987-.01 4.042-.059.975-.044 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.059-1.372.059-4.042 0-2.67-.01-2.987-.059-4.042-.044-.975-.207-1.504-.344-1.857-.182-.467-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.055-.048-1.372-.059-4.042-.059zM12 6.865A5.135 5.135 0 1012 17.135 5.135 5.135 0 0012 6.865zm0 8.468A3.333 3.333 0 1112 8.667a3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
                </svg>
              </Link>
              <Link href="#" className="text-[#5F6A5B] hover:text-[#2C3E2D] transition-all duration-300">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link href="#" className="text-[#5F6A5B] hover:text-[#2C3E2D] transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Explore Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-[11px] font-bold text-[#2C3E2D]">Explore</h4>
            <ul className="space-y-1">
              <li><Link href="/contact" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Contact Us</Link></li>
              <li><Link href="/view-demo" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">View Demo</Link></li>
              <li><Link href="#how-it-works" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">How It Works</Link></li>
              <li><Link href="/legacy-gallery" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Legacy Gallery</Link></li>
              <li><Link href="/pricing" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-[11px] font-bold text-[#2C3E2D]">Support</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">FAQs</Link></li>
              <li><Link href="#" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-[11px] font-bold text-[#2C3E2D]">Contact</h4>
            <ul className="space-y-1">
              <li className="flex items-center gap-2 text-[11px] text-[#4A5546] font-bold">
                <svg className="w-3.5 h-3.5 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                hello@evertold.com
              </li>
              <li className="flex items-center gap-2 text-[11px] text-[#4A5546] font-bold">
                <svg className="w-3.5 h-3.5 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.478-5.123-3.777-6.581-6.6l1.293-.97c.361-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                +49 89 1234 5678
              </li>
              <li className="flex items-center gap-2 text-[11px] text-[#4A5546] font-bold">
                <svg className="w-3.5 h-3.5 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                Munich, Germany
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-row items-center gap-3 lg:max-w-[140px] pt-1 lg:pt-0">
            <svg className="w-5 h-5 text-[#55624C] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.974 0-5.699-1.08-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span className="text-[10px] text-[#4A5546] font-sans font-bold leading-[1.3]">
              Serving families across Europe and beyond.
            </span>
          </div>

        </div>

        {/* Copyright strip */}
        <div className="flex flex-col items-center justify-center pt-3 pb-1 text-[9px] font-sans font-bold text-[#5F6A5B]">
          <span>&copy; {new Date().getFullYear()} Ever Told. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
