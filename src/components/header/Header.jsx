import './header.css'
import Navbar from '../navbar/Navbar'

function Header() {
    return (
        <header>
            <Navbar />
            <div className="header">
                <h1 className='main-title'>ComicDash</h1>
                <h4>Search and view some of MARVEL's latest comics!</h4>
            </div>
        </header>
    )
}

export default Header