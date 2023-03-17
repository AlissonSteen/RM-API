import "../styles/style.css"
import { Link, Outlet } from "react-router-dom"

function NavBar() {

    return (
        <>
            <ul className="navbar fixed-top nav justify-content-center ">
                <div className="container">
                    <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/320px-Rick_and_Morty.svg.png" alt="" width="140" height="40"></img></Link>
                </div>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Início</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/personages">Personagens</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/episodes">Episódios</Link>
                </li>
            </ul>

            <div>
                <Outlet />
            </div>
        </>

    )
}

export default NavBar