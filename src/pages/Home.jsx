import paypal from "..assets/paypal.png";
import stripe from "../assets/stripe.jpeg";
import Footer from "./components/Footer";

const Home = () => {
    return
    (

        <>
            <div className="bg-white w-screen h-auto flex items-center justify-center text-center px-4 py-10">
                <h2 className="text-3xl md:text-5xl leading-snug md:leading-tight text-black font-PlayfairDisplay font-semibold">
                    The{" "}
                    <span className="inline-block align-middle w-16 h-16 md:w-20 md:h-20 lg:w-240 lg:h-188 rounded-[64px_64px_32px_32px] overflow-hidden mx-2">
                        <img
                            src={paypal}
                            alt="Sofa"
                            className="w-full h-full object-cover"
                        />
                    </span>
                    Halal.Interior A
                    <br />
                    Contemporary House For The
                    <br />
                    Modern{" "}
                    <span className="inline-block align-middle w-16 h-16 md:w-20 md:h-20 rounded-[64px_64px_32px_32px] overflow-hidden mx-2">
                        <img
                            src={stripe}
                            alt="Sofa"
                            className="w-full h-full object-cover"
                        />
                    </span>
                    Human
                </h2>
            </div>
            <Footer />
        </>


    )
};
export default Home;
