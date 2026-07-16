import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-8 pb-8">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:justify-start gap-8 lg:gap-10 pb-12 border-b border-[#EBE4DD]">
          
          {/* Logo & Description */}
          <div className="flex flex-col space-y-6 lg:border-r lg:border-[#EBE4DD] lg:pr-10 lg:w-[280px]">
            <Link href="/" className="flex items-center gap-3">
              <svg
                className="w-8 h-8 text-[#55624C]"
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
                <span className="font-serif text-2xl font-extrabold tracking-wide uppercase text-[#2C3E2D]">
                  Ever Told
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#5F6A5B] font-sans mt-0.5">
                  A Home for Every Legacy
                </span>
              </div>
            </Link>
            <p className="text-[11px] text-[#2C3E2D] leading-relaxed font-sans font-bold">
              A digital legacy studio dedicated to preserving life stories for generations to come.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <Link href="#" className="w-7 h-7 rounded-full border border-[#EBE4DD] flex items-center justify-center text-[#5F6A5B] hover:text-[#2C3E2D] hover:bg-[#EBE4DD]/30 transition-all duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </Link>
              <Link href="#" className="w-7 h-7 rounded-full border border-[#EBE4DD] flex items-center justify-center text-[#5F6A5B] hover:text-[#2C3E2D] hover:bg-[#EBE4DD]/30 transition-all duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.71.054 1.14.051 1.66.251 2.073.414.549.213.943.466 1.355.877.411.412.664.806.877 1.355.163.411.362.933.414 2.073.044.926.054 1.28.054 3.71s-.01 2.784-.054 3.71c-.051 1.14-.251 1.66-.414 2.073-.213.549-.466.943-.877 1.355-.411.411-.806.664-1.355.877-.411.163-.933.362-2.073.414-.926.044-1.28.054-3.71.054s-2.784-.01-3.71-.054c-1.14-.051-1.66-.251-2.073-.414-.549-.213-.943-.466-1.355-.877-.411-.412-.664-.806-.877-1.355-.163-.411-.362-.933-.414-2.073-.044-.926-.054-1.28-.054-3.71s.01-2.784.054-3.71c.051-1.14.251-1.66.414-2.073.213-.549.466-.943.877-1.355.411-.411.806-.664 1.355-.877.411-.163.933-.362 2.073-.414.926-.044 1.28-.054 3.71-.054zm-.315 2c-2.4 0-2.716.01-3.66.053-.9.041-1.39.19-1.716.317a3.522 3.522 0 0 0-1.272.828 3.522 3.522 0 0 0-.828 1.272c-.128.324-.277.81-.317 1.716-.043.945-.053 1.26-.053 3.66s.01 2.715.053 3.66c.041.9.19 1.39.317 1.716a3.5 3.5 0 0 0 1.272.828c.324.128.81.277 1.716.317.945.043 1.26.053 3.66.053s2.715-.01 3.66-.053c.9-.041 1.39-.19 1.716-.317a3.5 3.5 0 0 0 1.272-.828c.324-.128.81-.277 1.716-.317.945-.043 1.26-.053 3.66-.053s2.715.01 3.66.053c.9.041 1.39.19 1.716.317.48.187.882.467 1.272.828.36.39.64.792.828 1.272.127.324.276.81.316 1.716.044.945.054 1.26.054 3.66s-.01 2.715-.054 3.66c-.04 1-.19 1.488-.316 1.716zM12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm0 2a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zm5.602-3.102a1.062 1.062 0 1 0 0 2.124 1.062 1.062 0 0 0 0-2.124z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="w-7 h-7 rounded-full border border-[#EBE4DD] flex items-center justify-center text-[#5F6A5B] hover:text-[#2C3E2D] hover:bg-[#EBE4DD]/30 transition-all duration-300">
                <span className="sr-only">YouTube</span>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link href="#" className="w-7 h-7 rounded-full border border-[#EBE4DD] flex items-center justify-center text-[#5F6A5B] hover:text-[#2C3E2D] hover:bg-[#EBE4DD]/30 transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Explore Links */}
          <div className="flex flex-col space-y-4 lg:border-r lg:border-[#EBE4DD] lg:pr-10 lg:pl-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#2C3E2D]">Explore</h4>
            <ul className="space-y-2.5">
              <li><Link href="/contact" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Contact Us</Link></li>
              <li><Link href="#how-it-works" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">How It Works</Link></li>
              <li><Link href="/legacy-gallery" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Legacy Gallery</Link></li>
              <li><Link href="/pricing" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Resources</Link></li>
              <li><Link href="#" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col space-y-4 lg:border-r lg:border-[#EBE4DD] lg:pr-10 lg:pl-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#2C3E2D]">Support</h4>
            <ul className="space-y-2.5">
              <li><Link href="#" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-[11px] text-[#4A5546] hover:text-[#2C3E2D] font-bold transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col space-y-4 lg:border-r lg:border-[#EBE4DD] lg:pr-10 lg:pl-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#2C3E2D]">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[11px] text-[#4A5546] font-bold">
                <svg className="w-3 h-3 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                hello@evertold.com
              </li>
              <li className="flex items-center gap-2 text-[11px] text-[#4A5546] font-bold">
                <svg className="w-3 h-3 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.478-5.123-3.777-6.581-6.6l1.293-.97c.361-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +49 89 1234 5678
              </li>
              <li className="flex items-center gap-2 text-[11px] text-[#4A5546] font-bold">
                <svg className="w-3 h-3 text-[#55624C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Munich, Germany
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center justify-center pt-6 lg:pt-0 lg:pl-6 w-full lg:max-w-[140px]">
            <span className="text-[10px] text-[#4A5546] font-sans font-bold tracking-wider uppercase text-center mt-3 leading-relaxed">
              Serving families across Europe and beyond.
            </span>
          </div>

        </div>

        {/* Copyright strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center pt-8 text-xs font-sans font-bold tracking-wide text-[#5F6A5B] uppercase text-center gap-4">
          <span>&copy; {new Date().getFullYear()} Ever Told. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
