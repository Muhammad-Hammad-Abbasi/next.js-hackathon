export default function Footer() {
    return (
      <footer className="bg-white p-5">
        {/* Divider */}
        <div className=" border-[#e6e6e6]" />
  
        {/* Main Footer Content */}
        <section className="py-12">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
              <nav className="flex flex-col gap-2.5 mt-3">
                <a href="#" className="text-[#727272] text-sm">About Us</a>
                <a href="#" className="text-[#727272] text-sm">Careers</a>
                <a href="#" className="text-[#727272] text-sm">We Are Hiring</a>
                <a href="#" className="text-[#727272] text-sm">Blog</a>
              </nav>
            </div>
  
            {/* Legal */}
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
              <nav className="flex flex-col gap-2.5 mt-3">
                <a href="#" className="text-[#727272] text-sm">Terms of Service</a>
                <a href="#" className="text-[#727272] text-sm">Privacy Policy</a>
                <a href="#" className="text-[#727272] text-sm">Cookies</a>
                <a href="#" className="text-[#727272] text-sm">Refund Policy</a>
              </nav>
            </div>
  
            {/* Features */}
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Features</h2>
              <nav className="flex flex-col gap-2.5 mt-3">
                <a href="#" className="text-[#727272] text-sm">Business Marketing</a>
                <a href="#" className="text-[#727272] text-sm">User Analytics</a>
                <a href="#" className="text-[#727272] text-sm">Live Chat</a>
                <a href="#" className="text-[#727272] text-sm">Unlimited Support</a>
              </nav>
            </div>
  
            {/* Resources */}
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
              <nav className="flex flex-col gap-2.5 mt-3">
                <a href="#" className="text-[#727272] text-sm">iOS & Android</a>
                <a href="#" className="text-[#727272] text-sm">Watch a Demo</a>
                <a href="#" className="text-[#727272] text-sm">Customers</a>
                <a href="#" className="text-[#727272] text-sm">API</a>
              </nav>
            </div>
  
            {/* Get in Touch */}
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
              <div className="mt-3">
                <div className="relative mb-4">
                  <input
                    type="email"
                    className="w-full sm:w-[220px] h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm"
                    placeholder="Your Email"
                  />
                  <button className="absolute right-0 top-0 h-12 px-4 bg-blue-500 text-white text-sm rounded-r-md">
                    Subscribe
                  </button>
                </div>
                <p className="text-[#727272] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Bottom Section */}
        <section className="bg-[#f9f9f9] py-4">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <p className="text-[#727272] text-sm">Made with love by Finland. All rights reserved.</p>
          </div>
        </section>
      </footer>
    );
  }
  