import CrochetPicture from './assets/crochet.jpg'

function Categories(){
    return(
            <div className="w-[350px] h-[350px] flex flex-col shadow-md rounded-full duration-500 hover:scale-105 overflow-hidden hover:shadow-lg transition-transform">
                <img src={CrochetPicture} className='w-full object-cover'></img>
            </div>
    )
}
export default Categories