import TopPicks from "./topPicks"
import sample from "./assets/sample.jpg"
import Categories from "./Categories"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScrollVelocity from './ScrollVelocity';

const FadeInSection = ({ children, delay = 0 }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.div>
    );
  };

function Page(){
    const navigate = useNavigate();
    
    return( 
        <div className="bg-purple-100 min-h-screen">
            <div className="overflow-x-hidden">
                <header className="relative w-full bg-purple-900 p-6 text-purple-100 m-0 overflow-x-hidden h-20 border-1 border-black">
                    <div className="absolute left-6 font-bold top-1/2 -translate-y-1/2 text-4xl font-savate">Dorisa</div>
                    {/* <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl space-x-6">
                        <a href="">product </a>
                        <a href="">about </a>
                        <a href="">contact </a>
                    </nav> */}
                    
                </header>

                <section className="h-120 bg-[#A2D2FF] flex flex-col items-center justify-center text-center overflow-x-hidden">
                    <motion.div initial={{ opacity: 0, y: 20 }}        // start off invisible + moved down
                                animate={{ opacity: 1, y: 0 }}          // end at normal position, visible
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="flex flex-col items-center justify-center text-center space-y-8 overflow-y-hidden" >
                        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl text-[#CDB4DB] font-bold overflow-y-hidden">Handcrafted crochet <br/> with love! <br/>Dorisa</h1>
                        <div className="my-5 h-7"></div>
                        <button onClick={() => navigate("/shop")}className="justify-center shadow-md hover:scale-105 text-purple-100 px-60 py-40 bg-purple-900 rounded-lg hover:bg-slate-900 transition-duration-300 text-3xl hover:shadow-lg transition-transform border">shop now</button>
                    </motion.div>
                </section>
                
                <FadeInSection delay={0.4}>
                <ScrollVelocity
                    texts={['Dorisa Trending', 'Scroll Down']} 
                    velocity={100} 
                    className="custom-scroll-text border border-black-100"
                    />
                </FadeInSection>

                <div className="h-10 bg-purple-200"></div>
                <hr/>
                

                <div className="h-120 bg-purple-300 flex items-center justify-center gap-4 sm:mt-30 sm:mb-30 border-2 border-black">
                    <motion.div initial={{ opacity: 0, y: 20 }}        // start off invisible + moved down
                            animate={{ opacity: 1, y: 0 }}          // end at normal position, visible
                            transition={{ duration: 0.8, delay: 1.0 }} className="max-w-screen-md mx-auto grid grid-cols-3 grid-rows-2 sm:grid-rows-1 gap-4">
                        <div className="col-span-2 row-span-2 sm:col-start-1 sm:col-span-1  aspect-square w-full"><TopPicks/></div>
                        <div className="aspect-square w-full sm:col-start-2 sm:col-span-1 "><TopPicks/></div>
                        <div className="aspect-square w-full sm:col-start-3 sm:col-span-1 "><TopPicks/></div>
                    </motion.div>
                </div>

                
                
                <div className="m-5 mt-20 mb-16 w-full">
                <div className="h-10 bg-purple-200"></div>
                    <FadeInSection delay={0.4}>
                    <div className="h-100 bg-[#FFC8DD] text-purple-100 min-h-[13rem] flex flex-col items-center justify-center text-center overflow-x-hidden border-2 border-black">
                        <div className="text-[#BDE0FE] font-bold">Dorisaa..</div>
                        <div className="h-5 my-5"></div>
                        <div className="text-2xl mt-4 overflow-x-hidden">about us we make crochet items with love and perfection and we know you love that and trust us you'll love that</div>
                    </div>
                    </FadeInSection>
                </div>

                <div className="my-10 h-14"></div>

                <div className="bg-purple-100 overflow-x-hidden">
                    <FadeInSection delay={0.4}>
                    <div className="bg-purple-100 overflow-x-hidden">
                    <h1 className="text-gray-700 text-4xl mb-20 text-center">Categories</h1>
                    <div className="my-10 h-5"></div>
                        <div className=" bg-purple-100 flex justify-center gap-8 mt-10">
                            <div className="justify-center gap-8 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 overflow-hidden">
                                <Categories/>
                                <Categories/>
                                <Categories/>
                            </div>
                        </div>
                
                    </div>
                    </FadeInSection>
                    <div className="my-10 h-10"></div>

            </div>
            </div>
            <footer className="h-42 p-6 text-purple-100 justify-center bg-slate-900">
            <div className="my-10 h-10 text-amber-100"></div>
                <h2>hi this is footer </h2>
                <h2>feel free to buy , all product are for you</h2>
                <h2>you can give custom order also</h2>
                &copy; 2025 Dorisaa. Made with love 🧶
            </footer>
    </div>
    )
}
export default Page