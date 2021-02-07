import Homeicon from '../images/download.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/">
                <img src={Homeicon} alt="" />
            </Link>
        </div>
    )
}
export default Navbar;