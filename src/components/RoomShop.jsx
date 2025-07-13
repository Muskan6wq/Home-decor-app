import KitchenImg from "../assets/mastercard.jpg";

export default function RoomShop() {
    return (
        <section className="relative text-center bg-[#fdf9f6] py-16 px-4">
            <h2 className="uppercase text-xs tracking-widest mb-0 ml-80">Shop By Room</h2>

            {/* Container */}
            <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center min-h-[400px]">

                {/* Background room labels */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-[#b3a59b] font-serif font-semibold pointer-events-none">
                    <div className="absolute top-28 right-[-8%] text-3xl sm:text-5xl">
                        Living Room <span className="text-xs align-top">(105)</span>
                    </div>
                    <div className="absolute top-[54%] left-[-2%] text-3xl sm:text-5xl">
                        / Home Office
                    </div>
                    <div className="absolute top-[54%] right-[-20%] text-3xl sm:text-5xl">
                        / Dining Room <span className="text-xs align-top">(15)</span>
                    </div>
                    <div className="absolute bottom-4 left-[22%] text-3xl sm:text-5xl">
                        / Kids Room
                    </div>
                    <div className="absolute bottom-4 right-[-2%] text-3xl sm:text-5xl">
                        / Bed Room <span className="text-xs align-top">(99)</span>
                    </div>
                    <div className="absolute top-[20%] right-[35%] text-xs">
                        (51)
                    </div>
                    <div className="absolute top-[18%] left-[50%] text-xs">
                        (19)
                    </div>
                </div>

                {/* Center Image + Title */}
                <div className="relative z-10">
                    <div className="w-[570px] h-[300px] overflow-hidden rounded-[50px] mx-auto shadow-lg">
                        <img
                            src={KitchenImg}
                            alt="Kitchen Room"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="absolute inset-0 flex top-14 left-[-6%] text-2xl sm:text-4xl font-serif font-semibold text-black">
                        Kitchen Room
                    </h3>
                </div>
            </div>
        </section>
    );
}
