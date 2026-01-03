import Nav from "../../molecules/header/Nav"
import Logo from "../../atoms/Logo"
import logo from "../../../assets/logo.png"
import Button from "../../atoms/Button"
import { useNavigate } from "react-router"
const Header = () => {
  const navigate = useNavigate();
  const navlist=["Nosotros","Planes","Cursos","Contacto"]
  return (
    <header className="bg-black/95 flex items-center py-3 px-10 justify-between backdrop-blur-md">
        <Logo imagen={logo}></Logo>
        <div className="flex items-center gap-10">
          <Nav  classname="hidden md:block" listName={navlist}/>
          <Button  variant="primary" onClick={()=>navigate("/auth/login")}>Iniciar Sesion</Button>
        </div>
    </header>
  )
}

export default Header