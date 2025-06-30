import CrochetPicture from './assets/crochet.jpg'

function ProductTemp(){
    return(
            <div className="w-[300px] h-auto flex flex-col shadow-md rounded-xl duration-500 hover:scale-105 overflow-hidden hover:shadow-lg transition-transform">
                <a href=''>
                    <img src={CrochetPicture} className='h-80 w-full rounded-t-xl object-cover'/>
                </a>
                <div className="p-3 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 break-words">
                    Handmade Crochet Top
                    </h3>
                    <p className="text-md text-gray-700 mt-1">₹499</p>
                </div>
            </div>
    )
}
export default ProductTemp