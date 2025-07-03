import CrochetPicture from './assets/crochet.jpg'
import { motion } from "framer-motion";

function ProductDetail() {
  return (
    <div className="bg-purple-100 min-h-screen">
        <div className="overflow-x-hidden">
                <header className="relative h-20 bg-purple-900 flex items-center justify-between px-6">
                    <div className="absolute text-purple-100 font-bold left-6 top-1/2 -translate-y-1/2 text-3xl">Dorisaa</div>
                        {/* <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl space-x-6 gap-4">
                            <a href="">All </a>
                            <a href="">plushie </a>
                            <a href="">wearables </a>
                        </nav> */}
                </header>
            </div>

      <div className='my-10 h-5'></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 items-center">
        {/* Image */}
        <motion.div initial={{ opacity: 0, y: 20 }}        // start off invisible + moved down
                            animate={{ opacity: 1, y: 0 }}          // end at normal position, visible
                            transition={{ duration: 0.6, delay: 0.6 }}  className="flex justify-center">
          <img
            src={CrochetPicture}
            className="w-full max-w-[350px] h-auto rounded-xl shadow-md border-2 border-grey-500 duration-500 hover:scale-105 overflow-hidden hover:shadow-lg transition-transform"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div initial={{ opacity: 0, y: 20 }}        // start off invisible + moved down
                            animate={{ opacity: 1, y: 0 }}          // end at normal position, visible
                            transition={{ duration: 0.8, delay: 1.2 }}  className="flex flex-col justify-center items-center space-y-4 border-2 border-black">
              <div className='border-1 border-black'>
                <h1 className="text-3xl text-slate-800 font-bold">Crochet Top brown</h1>
                <p className="text-lg text-gray-700">This beautifully handcrafted crochet top blends traditional artistry with modern elegance. Made with premium quality cotton yarn, it features an intricate open-knit pattern that’s breathable, soft on the skin, and perfect for warm days. The delicate mix of brown and cream tones creates a natural, earthy aesthetic that complements all skin tones and styles effortlessly.

                    Each top is carefully crocheted by skilled artisans, taking hours of detailed handwork to achieve the fine textures and symmetry. The neckline and borders are neatly finished for a refined look, and the design strikes a balance between cozy and stylish—whether you’re lounging, layering, or stepping out in the sun.

                    Pair it with jeans, skirts, or shorts for a laid-back yet elegant vibe. This crochet top isn’t just a piece of clothing; it’s wearable craftsmanship made with love and patience.</p>
                <p className="text-xl font-semibold text-slate-900">₹999</p>
              </div>
            <div>
              <button className="w-fit px-6 py-2 text-5xl bg-purple-900 text-white rounded-lg hover:bg-slate-900 shadow-md hover:scale-105 hover:shadow-lg transition-duration-300 transition-transform">Buy Now</button>
            </div>
            
        </motion.div>
      </div>

      <div className="my-10 h-10"></div>

      <footer className="h-52 text-amber-100 items-center justify-center bg-slate-900">
            <div className="my-10 h-10"></div>
                <h2>hi this is footer </h2>
                <h2>feel free to buy , all product are for you</h2>
                <h2>you can give custom order also</h2>
                &copy; 2025 Dorisaa. Made with love 🧶
            </footer>
      
    </div>
  );
}

export default ProductDetail;
