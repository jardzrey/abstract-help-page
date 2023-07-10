const Navbar = () => {
  return (
    <nav className="bg-black">
        <div className="w-5/6 flex flex-wrap items-center justify-between mx-auto py-5 text">
            <div className="flex flex-row text-white text-2xl divide-x-2 space-x-3">
                <p className="font-bold">
                    Abstract
                </p>
                <p className="cursor-pointer hover:underline whitespace-normal">&nbsp; Help Center</p>
            </div>
            <div className="text-white space-x-4">
                <button className="bg-[#191a1b] border border-white rounded-md text-2xl px-8 py-2">Submit a request</button>
                <button className="bg-[#4C5FD5] rounded-md text-2xl px-8 py-2 transition duration-150 ease-in hover:bg-white hover:text-black">Sign in</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar