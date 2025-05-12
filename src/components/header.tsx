import { Search } from "lucide-react"

const Header = () => {
    return (
        <div className="w-full bg-black text-white flex items-center justify-between px-6 py-3">
            <Search className="w-6 h-6 cursor-pointer" />
            <a href="/" className="font-bold tracking-widest text-lg md:text-2xl flex flex-col items-center">
            MAYBELLINE
            </a>
            <div></div>
        </div>
    )
}

export default Header;