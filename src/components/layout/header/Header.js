// import logo from "../../../public/food-delivery-logo.png"
function Header(){
 return (
    <div className="header-div">
        <div className="header-logo">
            <img src='/food-logo.png'></img>
        </div>
        <div className="header-menu">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
 );   
}

export default Header;