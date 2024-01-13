import { NavLink } from "react-router-dom"
import { linkedin } from "../assets/icons"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to='/' className='w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md'>
            <p className="blue-gradient_text">KN</p>
        </NavLink>
        <nav className="flex items-center justify-center text-lg gap-7 font-medium">
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
                <a href="https://www.linkedin.com/in/mohankoushik-nalam-b09a01282/" target="_blank" rel="noopener noreferrer" className="text-black">
                    <img src={linkedin} alt="LinkedIn" className="w-8 h-8 bg-white flex items-center justify-center" />
                </a>
        </nav>
    </header>
  )
}

export default Navbar