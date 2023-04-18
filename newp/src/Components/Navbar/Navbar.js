
const logo = 'https://static.wixstatic.com/media/e49f4b_1d6399fc9f4641d7bb545041fd65c740~mv2.png/v1/fill/w_512,h_194,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e49f4b_1d6399fc9f4641d7bb545041fd65c740~mv2.png';
function Navbar() {
    return (
      <>
      
<div className="header">
  <nav>
    <div className="container">
      <div className="navbar">
        <div >
        <img className="navbar__img" src={logo} alt="gd"/>
        </div>
        <div className="hamburger">
                        <span className="hamburger__span"></span>
                        <span className="hamburger__span"></span>
                        <span className="hamburger__span"></span>
                    </div>
        <ul className="navbar__menu">
           <li className="navbar__menu-item"><a className="navbar__menu-link" href="">Menu</a></li>
           <li className="navbar__menu-item"><a className="navbar__menu-link" href="">News</a></li>
           <li className="navbar__menu-item"><a className="navbar__menu-link" href="">About Us</a></li>
           <li className="navbar__menu-item"><a className="navbar__menu-link" href="">About Us</a></li>
           <button className="navbar__menu-btn"><a className="navbar__menu-link" href="">Log in</a></button>    
        </ul>
      </div>
    </div>
  </nav>
</div></>

   )
}
export default Navbar;