import './header.css'
import Navbar from '../navbar/Navbar'

function Header() {
    return (
        <header>
            <Navbar />
            <div className="header">
                <div className='main-title'>
                    <img className='comic-icon' src='../../../public/comic-icon.png'/>
                    <h1>ComicDash</h1>
                </div>
                <h4>Search and view some of MARVEL's latest comics!</h4>
            </div>
        </header>
    )
}

export default Header