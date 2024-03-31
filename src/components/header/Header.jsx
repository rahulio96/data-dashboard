import headerCSS from './Header.module.css'
import Navbar from '../navbar/Navbar'

function Header() {
    return (
        <header>
            <Navbar />
            <div className={headerCSS.header}>
                <div className={headerCSS.mainTitle}>
                    <img className={headerCSS.icon} src='/comic-icon.png'/>
                    <h1>ComicDash</h1>
                </div>
                <h4 className={headerCSS.subTitle}>Search and view some of MARVEL's latest comics!</h4>
            </div>
        </header>
    )
}

export default Header