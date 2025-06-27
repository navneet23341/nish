import TopPicks from "./topPicks"

function Page(){

    
    return( 
        <div className="overflow-x-hidden">
            <header className="relative w-full bg-purple-100 p-6 text-black m-0 overflow-x-hidden h-20">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl">Geeee</div>
                <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl space-x-6">
                    <a href="">product </a>
                    <a href="">about </a>
                    <a href="">contact </a>
                </nav>
                
            </header>
            <div className="h-52 w-full bg-purple-100 flex items-center justify-center text-center overflow-x-hidden"><h1 className="text-7xl">handcrafted crochet with love</h1>
            </div>

            <div className="h-120 bg-purple-100 flex justify-center gap-8 mt-10">
                <TopPicks/>
                <TopPicks/>
                <TopPicks/>
            </div>
            
            
        </div>
        
    )
}
export default Page