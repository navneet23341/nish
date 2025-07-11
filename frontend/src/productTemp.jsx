import CrochetPicture from './assets/crochet.jpg'
import { useNavigate } from "react-router-dom";

function ProductTemp(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/product/1");
    };
    return(
            <div onClick={handleClick} className="w-[300px] h-auto border-2 border-grey-500 flex flex-col shadow-md rounded-xl duration-500 hover:scale-105 overflow-hidden hover:shadow-lg transition-transform">
                    <img src={CrochetPicture} className='h-80 w-full rounded-t-xl object-cover'/>
                <div className="p-3 bg-pink-200 text-center shadow-md ">
                    <h3 className="text-xl font-semibold text-slate-900 break-words">
                    Handmade Crochet Top
                    </h3>
                    <p className="text-md text-night mt-1">₹499</p>
                </div>
            </div>
    )
}
export default ProductTemp