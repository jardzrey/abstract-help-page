import Container from "./components/Container"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <>
      <div className="pb-4">
        <Navbar />
        <Hero />
        <Container />
      </div>
      <Footer />
      <button 
        className="font-bold fixed z-30 bottom-3 right-8 bg-[#4C5FD5] px-[22px] py-[13px] rounded-3xl drop-shadow-lg flex justify-center items-center text-white text-base hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300 space-x-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path></svg>
        <span>Help</span>
      </button>
    </>
  )
}

export default App
