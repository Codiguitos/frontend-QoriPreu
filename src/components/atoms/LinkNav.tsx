
type LinkNavProps={
    texto:string

}
const LinkNav = ({texto}:LinkNavProps) => {
  return (
    <a className="text-lg text-[#ffffff] font-medium transition-colors duration-300 relative cursor-pointer
                    after:content-[''] after:absolute  after:bottom-0 after:left-0
                    after:w-0 after:h-0.5 after:bg-[#00A676] after:transition-all after:duration-300
                  hover:text-[#00A676] hover:after:w-full"  
    >{texto}</a>
  )
}

export default LinkNav