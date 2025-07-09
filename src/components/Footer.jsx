import Amex from "../assets/amex.png";
import Discover from "../assets/discover.jpg";
import Mastercard from "../assets/mastercard.jpg";
import Paypal from "../assets/paypal.png";
import Stripe from "../assets/stripe.jpeg";
import Visa from "../assets/visa.png";


export default function Footer() {
    return (
        <footer className="bg-black text-white text-sm px-6 md:px-16 py-12">
            {/* CTA Section */}
            <div className="text-center mb-16">
                <h2 className="text-2xl md:text-4xl font-semibold italic mb-4 leading-snug">
                    We Provide best <br className="md:hidden" /> handpicked home decor
                </h2>
                <button className="border px-6 py-2 hover:bg-white hover:text-black transition">
                    EXPLORE OUR PRODUCTS
                </button>
            </div>

            {/* Main Grid */}
            <div className="grid md:grid-cols-2 gap-10 border-t border-gray-700 pt-10 relative">
                {/* Vertical Divider */}
                <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-gray-700 transform -translate-x-1/2"></div>

                {/* Left Side */}
                <div>
                    <h3 className="uppercase text-xs tracking-wide mb-3">
                        Subscribe to receive grape news & offers
                    </h3>
                    <div className="flex mb-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 bg-[#5a3a27] text-white placeholder:text-white/70 focus:outline-none"
                        />
                        <button className="bg-[#5a3a27] px-4">➜</button>
                    </div>
                    <label className="flex items-start gap-2 text-xs text-white/80">
                        <input type="checkbox" className="mt-1" />
                        I've read the Privacy Policy and I consent to Halal Interior sending me marketing communications
                    </label>

                    <div className="mt-8 border-t border-gray-700 pt-6">
                        <div className="grid grid-cols-4 border border-white/20 text-center text-xs uppercase divide-x divide-white/20">
                            <div className="py-2">Instagram</div>
                            <div className="py-2">Facebook</div>
                            <div className="py-2">Pinterest</div>
                            <div className="py-2">Twitter</div>
                        </div>
                    </div>


                    <div className="mt-4 text-xs">🇺🇸 United States ▼</div>
                </div>

                {/* Right Side */}
                <div className="flex flex-col justify-between h-full">
                    {/* 4 Columns */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <ul className="space-y-2">
                                <li>All Products</li>
                                <li>Best Sellers</li>
                                <li>New Arrivals</li>
                                <li>Lowest Prices</li>
                                <li>Delivery</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                <li>Privacy Policy</li>
                                <li>Order Online</li>
                                <li>Contact Us</li>
                                <li>Returns & Claims</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                <li>About Us</li>
                                <li>Our Promise</li>
                                <li>My Account</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                <li>Blog</li>
                                <li>Reviews</li>
                                <li>Privacy Policy</li>
                                <li>Lookbook</li>
                            </ul>
                        </div>
                    </div>

                    {/* Payment Section */}
                    <div className="mt-8 flex flex-wrap items-center justify-start md:justify-end gap-2">
                        <span className="text-white/70">We Accept:</span>
                        <img src={Visa} alt="Visa" className="h-5" />
                        <img src={Mastercard} alt="Mastercard" className="h-5" />
                        <img src={Paypal} alt="Paypal" className="h-5" />
                        <img src={Stripe} alt="Stripe" className="h-5" />
                        <img src={Amex} alt="Amex" className="h-5" />
                        <img src={Discover} alt="Discover" className="h-5" />
                    </div>
                </div>
            </div>

            {/* Bottom Footer Line */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center text-white/50">
                    © 2021 CHIRANJITH.COM. ALL RIGHTS RESERVED.
                </div>
                <div className="text-white/50">PRIVACY POLICY | TERMS OF USE</div>
            </div>
        </footer>
    );
}