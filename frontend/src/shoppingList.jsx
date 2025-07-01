import {motion} from "framer-motion"
import sample from "./assets/sample.jpg"
import ProductTemp from "./productTemp"
import { useNavigate } from "react-router-dom";

function Shopping(){
    const navigate = useNavigate();

    return(

        <div className="bg-purple-100 min-h-screen">
            <div className="overflow-x-hidden">
                <header className="relative h-20 bg-purple-900 text-purple-100 flex items-center justify-between px-6">
                    <div className="absolute left-6 font-bold top-1/2 -translate-y-1/2 text-3xl">Dorisaa</div>
                        {/*<nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl space-x-6 gap-4">
                            <a href="">All </a>
                            <a href="">plushie </a>
                            <a href="">wearables </a>
                        </nav> */}
                </header>
            </div>

            <div className="my-10 h-5"></div>

            <div className="h-30 overflow-x-hidden" >
                                <motion.div initial={{ opacity: 0, y: 20 }}        // start off invisible + moved down
                            animate={{ opacity: 1, y: 0 }}          // end at normal position, visible
                            transition={{ duration: 0.8, delay: 0.5 }} >
                                <h1 className="text-5xl md:text-7xl text-purple-900 font-bold">welcomm to shopping list..</h1>
                                </motion.div>
                </div>

            <section className="w-full mt-10 mb-5 flex justify-center">
                    <motion.div initial={{ opacity: 0, y: 20 }}        // start off invisible + moved down
                        animate={{ opacity: 1, y: 0 }}          // end at normal position, visible
                        transition={{ duration: 0.8, delay: 1.0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-20">
                            <ProductTemp/>
                            <ProductTemp/>
                            <ProductTemp/>
                            <ProductTemp/>
                            <ProductTemp/>
                            <ProductTemp/>
                            <ProductTemp/>
                            <ProductTemp/>
                            <ProductTemp/>
                    </motion.div>
            </section>

            <div className="my-10 h-10"></div>

            <footer className="h-52 text-amber-100 items-center justify-center bg-slate-900">
            <div className="my-10 h-10"></div>
                <h2>hi this is footer </h2>
                <h2>feel free to buy , all product are for you</h2>
                <h2>you can give custom order also</h2>
                &copy; 2025 Dorisaa. Made with love 🧶
            </footer>
        </div>

    )
}
export default Shopping