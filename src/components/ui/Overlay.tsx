import { Scroll } from "@react-three/drei";

export const Overlay = () => {
    return (
        <Scroll html style={{ width: "100%", height: "100%" }}>
            <main className="flex flex-col w-full">
                {/* Section 1 */}
                <section className="w-full h-screen flex flex-col items-center justify-center relative p-8">
                    <div className="absolute top-10 left-10 flex flex-col gap-2 glass p-6 rounded-3xl max-w-xs transition-transform hover:scale-105 duration-300 cursor-pointer">
                        <p className="text-sm font-light text-gray-300">from 3D Abstract Assets</p>
                        <p className="text-xs text-gray-400">by The RLVNT Studios</p>
                        <p className="text-xs mt-2 italic font-bold">replace it with your product</p>
                        <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm">
                            💚
                        </div>
                    </div>

                    <h1 className="text-[10vw] font-black italic tracking-tighter text-center leading-[0.85] mt-20 select-none">
                        pre<span className="font-normal">sent</span>
                        <br />
                        <span className="inline-flex align-middle justify-center items-center bg-white/10 rounded-full w-[8vw] h-[5vw] mx-2 backdrop-blur-md border border-white/20">
                            <span className="text-[3vw]">💚</span>
                        </span>
                        <span className="font-normal">like</span> a pro
                    </h1>

                    <div className="absolute bottom-20 right-20 glass p-6 rounded-3xl max-w-xs flex flex-col gap-2 transition-transform hover:scale-105 duration-300 cursor-pointer">
                        <p className="text-xl font-light">custom <span className="italic font-bold">settings</span></p>
                        {/* Mock UI controls */}
                        <div className="w-full h-2 rounded bg-gray-600/50 mt-2 relative overflow-hidden">
                            <div className="absolute left-0 top-0 h-full w-2/3 bg-brand-green shadow-[0_0_10px_rgba(170,243,139,0.5)]"></div>
                        </div>
                        <div className="w-full h-2 rounded bg-gray-600/50 mt-1 relative overflow-hidden">
                            <div className="absolute left-0 top-0 h-full w-1/3 bg-white"></div>
                        </div>
                        <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm">
                            💚
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="w-full h-screen flex items-center justify-center relative p-8">
                    <div className="text-center select-none">
                        <h2 className="text-[12vw] font-black italic tracking-tighter leading-none">
                            get <span className="font-normal">free</span>
                        </h2>
                        <div className="inline-flex align-middle justify-center items-center bg-white/10 rounded-full w-[10vw] h-[6vw] my-4 backdrop-blur-md border border-white/20">
                            <span className="text-[4vw]">💚</span>
                        </div>
                        <h2 className="text-[12vw] font-normal tracking-tighter leading-none">
                            ro<span className="italic font-bold">cks</span>
                        </h2>
                    </div>

                    <div className="absolute bottom-32 right-32 glass px-8 py-4 rounded-full flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                        <span className="text-2xl">by the <span className="italic font-black">RLVNT</span> studio</span>
                        <span className="bg-white/20 p-2 rounded-full">💚</span>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="w-full h-screen flex items-center justify-center relative p-8">
                    <div className="glass p-20 rounded-[5rem] border-2 border-white/10 flex items-center gap-8 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                        <h2 className="text-[10vw] font-black italic">I</h2>
                        <div className="bg-white/10 w-[8vw] h-[5vw] rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                            <span className="text-[4vw]">💚</span>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[8vw] font-black italic leading-none">RLVNT</h2>
                            <h2 className="text-[8vw] font-normal italic leading-none">rocks</h2>
                        </div>
                    </div>
                </section>
            </main>
        </Scroll>
    );
};
