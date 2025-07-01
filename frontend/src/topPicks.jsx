import CrochetPicture from './assets/crochet.jpg'
import { useNavigate } from "react-router-dom"; 

function TopPicks(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/product/1");
    };
    return(
            <div onClick={handleClick} className="w-[350px] h-[350px] border-2 border-grey-500 flex-col shadow-md rounded-xl duration-500 hover:scale-105 overflow-hidden hover:shadow-lg transition-transform">
                <img src={CrochetPicture} className='w-full object-cover'></img>
            </div>
    )
}
export default TopPicks