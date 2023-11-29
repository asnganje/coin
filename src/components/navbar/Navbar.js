import NavBarContainer from "../../styles/Navbar.style";

const Navbar = () => {
    return(
        <NavBarContainer>
            <h1 className="nav-title">Global Cryptocurrency</h1>
            <div className="notify">
                <h2>🔔</h2>
                <p>⚙️</p>
            </div>    
        </NavBarContainer>
    )
}
export default Navbar;