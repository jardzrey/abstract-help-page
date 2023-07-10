const Hero = () => {
  return (
    <section className="bg-[#dadbf1] px-8 pt-20 pb-28 mx-auto">
        <div className="flex flex-col items-center max-w-[720px] mx-auto">
            <div className="flex items-center justify-center h-full mb-4">
                <p className="text-center text-7xl my-6">How can we help?</p>
            </div>
            <input 
                className="w-full p-4 text-xl border border-black rounded-md"
                placeholder="Search"
            />
        </div>
    </section>
  )
}

export default Hero