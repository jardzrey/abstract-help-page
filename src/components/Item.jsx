const Item = ({ imageSource, title, text }) => {
  return (
    <div className="flex pr-6 mb-12">
        <div className="mt-[50px]">
            <img 
                width='86px'
                height='86px'
                className="mr-[30px]"
                src={imageSource}
            />
        </div>
        <div className="w-full">
        <p className="text-2xl font-bold mt-[48px] mb-[16px]">{title}</p>
        <p className="text-2xl mb-5">{text}</p>
        <a className="text-[#4C5FD5] text-xl hover:underline" href="#">Learn More</a>
        </div>
    </div>
  )
}

export default Item