
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTripadvisor } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-0">
                    {/* Address Section */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h3 className="text-xl font-bold uppercase tracking-wider">Address</h3>
                        <p className="text-gray-400 text-center md:text-left">
                            Hotel Caroline <br />
                            Via Dolomites, 12 <br />
                            39046 Ortisei (BZ), Italy
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h3 className="text-xl font-bold uppercase tracking-wider">Contact Us</h3>
                        <p className="text-gray-400 text-center md:text-left">
                            <span className="block">Phone: +39-0332-1431105<br/>+39-0332-1582654<br/>+39-0332-315731 </span>
                            <span className="block">Email: info@carolinehotel.it</span>
                        </p>
                    </div>

                    {/* Follow Us Section */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h3 className="text-xl font-bold uppercase tracking-wider">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a target="_blank"
  rel="noopener noreferrer" href="https://www.instagram.com/caroline.hotel/" className="text-gray-200 hover:text-purple-400 transition-colors text-2xl">
                                <FaInstagram />
                            </a>
                            <a target="_blank"
  rel="noopener noreferrer" href="https://www.facebook.com/people/Caroline-Hotel/100093935411280/" className="text-gray-200 hover:text-blue-400 transition-colors text-2xl">
                                <FaFacebookF />
                            </a>
                            <a  target="_blank"
  rel="noopener noreferrer" href="https://www.tripadvisor.it/Hotel_Review-g1972443-d1230404-Reviews-Caroline_Hotel_Brusimpiano-Brusimpiano_Province_of_Varese_Lombardy.html" className="text-gray-200 hover:text-green-400 transition-colors text-2xl">
                                <FaTripadvisor />
                            </a>
                        </div>
                    </div>
                </div>


                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Hotel Caroline. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
