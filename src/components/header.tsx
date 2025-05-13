import { Search } from "lucide-react"

const Header = () => {
    return (
        <div>
            <div className="w-full bg-black text-white flex items-center justify-between px-6 py-3">
                <Search className="w-6 h-6 cursor-pointer" />
                <a href="/" className="font-bold tracking-widest text-lg md:text-2xl flex flex-col items-center">
                    MAYBELLINE
                </a>
                <div></div>
            </div>
            <nav className="w-full bg-black text-white flex justify-center items-center py-2 border-b border-gray-800">
                <ul className="flex flex-wrap gap-8 font-bold uppercase text-sm md:text-base tracking-wide">
                    <li className="cursor-pointer hover:underline hover:text-pink-400">
                        <a href="/product">
                            Tất cả sản phẩm
                        </a>
                    </li>
                    <li className="cursor-pointer hover:underline hover:text-pink-400">
                        <a href="/product/1">
                            FIT ME®
                        </a>
                    </li>
                    <li className="cursor-pointer hover:underline hover:text-pink-400">
                        <a href="/about-us">
                            Về Maybelline
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;