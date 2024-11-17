import blackCross from '../../../assets/images/black-cross.png'
import { Link } from 'react-router-dom'
import './NavItems.scss'
type NavItemsProps = {
    toggleNav : () => void
}

const NavItems = ({toggleNav}: NavItemsProps) => {
    return (
        <div>
            <div className="nav-menu">
                <img src={blackCross} 
                alt="blackcross" 
                className="nav-menu__cross" 
                onClick={toggleNav} 
                />
            </div>
            <Link to="/eventsclub" onClick={toggleNav}>
                Home
            </Link>
        </div>
    )
}

export default NavItems
