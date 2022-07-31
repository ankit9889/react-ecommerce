import logo from '../logo.svg';
import '../assets/css/header.css';

function Header( {Logout} ) {
  return (
    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><img src={logo} className="App-logo" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="javascript:void(0)">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0)">Products</a>
                        </li>
                        <li className="nav-item d-none" id="LogoutButton">
                            <a className="nav-link" onClick={Logout} href="javascript:void(0)">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
            
  );
}

export default Header;
