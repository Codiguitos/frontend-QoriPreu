type ImgProps={
    src:string
}
const Img = ({src}:ImgProps) => {
  return (
    <img src={src} className='w-full max-w-[600px] h-auto drop-shadow-[0_20px_60px_rgba(0,107,75,0.4)] float '>
    </img>
  )
}

export default Img