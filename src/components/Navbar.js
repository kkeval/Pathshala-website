import Homeicon from '../images/download.png';
import {Link} from 'react-router-dom';
import '../index.css'


const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/Home">
                <img src={Homeicon} alt="" />
            </Link>
        </div>
    )
}
export default Navbar;