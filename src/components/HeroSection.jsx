import SofaImage from "../assets/amex.png";
import ChairImage from "../assets/paypal.png";

export default function HeroSection() {
    return (
        <section className="bg-white py-16 px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-medium italic leading-snug">
                <span className="inline-block">The</span>
                <span className="inline-block mx-4">
                    <img
                        src={ChairImage}
                        alt="Chair"
                        className="w-[240px] h-[128px] object-cover rounded-[64px] inline-block"
                    />
                </span>
                <span className="inline-block">Halal.Interior A</span>
                <br className="hidden md:block" />
                <span className="inline-block">Contemporary House For The</span>
                <br className="hidden md:block" />
                <span className="inline-block">Modern</span>
                <span className="inline-block mx-4">
                    <img
                        src={SofaImage}
                        alt="Sofa"
                        className="w-[240px] h-[128px] object-cover rounded-[64px] inline-block"
                    />
                </span>
                <span className="inline-block">Human</span>
            </h1>
        </section>
    );
}
