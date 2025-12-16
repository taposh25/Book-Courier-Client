
import { RiFacebookFill, RiInstagramFill, RiLinkedinBoxFill, RiPhoneFill, RiMailFill, RiBookLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import {TiSocialLinkedin } from "react-icons/ti";
import { Link, NavLink } from "react-router";
import Logo from "../../component/Logo/Logo";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* logo */}
        <div>
            <Link to="/" className="text-xl font-bold flex items-center gap-2">
                <RiBookLine className="text-primary text-4xl" />BookCourier
            </Link>
            
         
          <p className="text-sm text-gray-600">
            Fastest & Secure parcel delivery across Bangladesh.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="footer-title">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/career">Careers</Link></li>
            <li><Link to="/delivery">International Delivery</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="footer-title">Support</h4>
          <ul className="space-y-2">
            <li><Link to="/track-percel">Track Parcel</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/book-delivery">Book a Delivery</Link></li>
          </ul>
        </div>

        {/* contact */}
        <div>
          <h4 className="footer-title">Contact</h4>
          <p className="flex items-center gap-2"><RiPhoneFill/> +880 01792524289</p>
          <p className="flex items-center gap-2"><RiMailFill/> taposhbarai03@gmail.com</p>

        
                <div className="flex gap-3 mt-2">
             {/*Facebook Link*/}
              <NavLink to="https://www.facebook.com/share/17KrLmmkxj/">
                  <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                    <SlSocialFacebook size={18} />
                </button>
              </NavLink>


              {/*Twitter Link*/}
               <NavLink to="https://x.com/taposh_barai03S">
                  <button className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition">
                
                    <FaXTwitter size={18} />
                </button>
               </NavLink>

               <NavLink to="https://github.com/taposh25">

                 <button className="p-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition">
                    <FaGithub  size={18} />
                </button>

               </NavLink>

                <NavLink to="">
                  <button className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition">
                    <TiSocialLinkedin size={18} />
                </button>
                </NavLink>
                
                </div>




        </div>
      </div>

      {/* bottom copyright */}
      <hr className="border-gray-300 my-5" />

      <p className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} BookCourier — All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer;
