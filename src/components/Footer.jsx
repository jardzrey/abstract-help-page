const Footer = () => {
  return (
    <footer className="flex bg-black text-white px-8 pb-16">
        <div className="flex w-full mx-16 pb-[100px] font-bold">
            <div className="w-[182px]">
                <h3 className="mt-12 mb-4 text-2xl">Abstract</h3>
                <p className="cursor-pointer hover:underline">Start Trial</p>
                <p className="cursor-pointer hover:underline">Pricing</p>
                <p className="cursor-pointer hover:underline">Download</p>
            </div>
            <div className="w-[182px]">
                <h3 className="mt-12 mb-4 text-2xl">Resources</h3>
                <p className="cursor-pointer hover:underline">Blog</p>
                <p className="cursor-pointer hover:underline">Help Center</p>
                <p className="cursor-pointer hover:underline">Release Notes</p>
                <p className="cursor-pointer hover:underline">Status</p>
            </div>
            <div className="w-[182px]">
                <h3 className="mt-12 mb-4 text-2xl">Community</h3>
                <p className="cursor-pointer hover:underline">Twitter</p>
                <p className="cursor-pointer hover:underline">LinkedIn</p>
                <p className="cursor-pointer hover:underline">Facebook</p>
                <p className="cursor-pointer hover:underline">Dibble</p>
                <p className="cursor-pointer hover:underline">Podcast</p>
            </div>
            <div className="w-[182px] space-y-4">
                <div>
                    <h3 className="mt-12 mb-4 text-2xl">Company</h3>
                    <p className="cursor-pointer hover:underline">About Us</p>
                    <p className="cursor-pointer hover:underline">Careers</p>
                    <p className="cursor-pointer hover:underline">Legal</p>
                </div>
                <div>
                    <p className="font-bold">Contact Us</p>
                    <p className="cursor-pointer hover:underline">info@abstract.com</p>
                </div>
                
                
            </div>
        </div>
    </footer>
  )
}

export default Footer